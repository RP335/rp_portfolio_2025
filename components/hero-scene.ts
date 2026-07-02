import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

export interface ModeInfo {
  nx: number
  ny: number
  freq: number
}

export interface HeroSceneHandle {
  dispose: () => void
}

// Rectangular-room axial/tangential modes: f = (c/2) * sqrt((nx/Lx)^2 + (ny/Ly)^2)
const SPEED_OF_SOUND = 343
const ROOM_LX = 6.0
const ROOM_LY = 4.0

const MODE_SEQUENCE: [number, number][] = [
  [1, 1],
  [2, 1],
  [2, 2],
  [3, 2],
  [3, 3],
  [4, 2],
  [4, 3],
]

function modeFreq(nx: number, ny: number): number {
  return (
    (SPEED_OF_SOUND / 2) *
    Math.sqrt((nx / ROOM_LX) ** 2 + (ny / ROOM_LY) ** 2)
  )
}

// Each visual "mode set" = a dominant mode plus two quieter companions so the
// surface reads as a rich modal superposition rather than a single sine sheet.
function modeSetUniforms(index: number): THREE.Vector4[] {
  const [nx, ny] = MODE_SEQUENCE[index % MODE_SEQUENCE.length]
  const f = modeFreq(nx, ny)
  const omega = 0.045 * f
  return [
    new THREE.Vector4(nx, ny, 0.72, omega),
    new THREE.Vector4(nx + 1, ny, 0.18, omega * 1.31),
    new THREE.Vector4(nx, ny + 1, 0.14, omega * 1.62),
  ]
}

const WAVE_VERTEX_COMMON = /* glsl */ `
  uniform float uTime;
  uniform vec4 uA0;
  uniform vec4 uA1;
  uniform vec4 uA2;
  uniform vec4 uB0;
  uniform vec4 uB1;
  uniform vec4 uB2;
  uniform float uBlend;
  uniform vec2 uMouse;      // uv-space cursor position
  uniform float uMouseAmp;  // eased 0..1 while cursor is over the hero
  uniform vec4 uGrab;       // (u, v, startTime, amp) — pulse when speaker is grabbed

  const float PI = 3.14159265359;

  float standing(vec2 uv, vec4 m) {
    return m.z * sin(PI * m.x * uv.x) * sin(PI * m.y * uv.y) * cos(m.w * uTime);
  }

  float waveHeight(vec2 uv) {
    float a = standing(uv, uA0) + standing(uv, uA1) + standing(uv, uA2);
    float b = standing(uv, uB0) + standing(uv, uB1) + standing(uv, uB2);
    float h = mix(a, b, uBlend);
    // Cursor acts as a point source injecting a decaying circular wave.
    float r = distance(uv, uMouse);
    h += uMouseAmp * 0.28 * sin(34.0 * r - 5.5 * uTime) * exp(-6.0 * r);
    // Grab pulse: a strong one-shot wavefront radiating from the speaker.
    float dt = uTime - uGrab.z;
    if (dt > 0.0) {
      float rg = distance(uv, uGrab.xy);
      h += uGrab.w * 0.55 * sin(42.0 * rg - 9.0 * dt) * exp(-5.0 * rg) * exp(-1.1 * dt);
    }
    return h;
  }
`

const WIRE_VERTEX = /* glsl */ `
  ${WAVE_VERTEX_COMMON}
  varying float vH;
  varying vec2 vUvv;
  void main() {
    vec3 p = position;
    float h = waveHeight(uv);
    p.y += h;
    vH = h;
    vUvv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`

const WIRE_FRAGMENT = /* glsl */ `
  varying float vH;
  varying vec2 vUvv;
  void main() {
    float h01 = clamp(vH * 0.75 + 0.5, 0.0, 1.0);
    vec3 deep = vec3(0.05, 0.14, 0.35);
    vec3 cyan = vec3(0.13, 0.83, 0.93);
    vec3 magenta = vec3(0.93, 0.28, 0.95);
    vec3 col = mix(deep, cyan, h01);
    col += magenta * pow(h01, 3.0) * 0.9;
    // Fade the sheet toward its edges so it dissolves into the fog.
    float edge = smoothstep(0.0, 0.12, vUvv.x) * smoothstep(1.0, 0.88, vUvv.x)
               * smoothstep(0.0, 0.12, vUvv.y) * smoothstep(1.0, 0.88, vUvv.y);
    gl_FragColor = vec4(col, edge * (0.16 + 0.5 * pow(h01, 2.0)));
  }
`

const POINTS_VERTEX = /* glsl */ `
  ${WAVE_VERTEX_COMMON}
  uniform float uPointScale;
  varying float vH;
  varying vec2 vUvv;
  void main() {
    vec3 p = position;
    float h = waveHeight(uv);
    p.y += h;
    vH = h;
    vUvv = uv;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uPointScale * (1.0 + clamp(h, 0.0, 1.5)) / max(-mv.z, 0.1);
    gl_Position = projectionMatrix * mv;
  }
`

const POINTS_FRAGMENT = /* glsl */ `
  varying float vH;
  varying vec2 vUvv;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, d);
    float h01 = clamp(vH * 0.75 + 0.5, 0.0, 1.0);
    vec3 cyan = vec3(0.25, 0.9, 1.0);
    vec3 magenta = vec3(1.0, 0.45, 0.95);
    vec3 col = mix(cyan, magenta, pow(h01, 2.0));
    float edge = smoothstep(0.0, 0.1, vUvv.x) * smoothstep(1.0, 0.9, vUvv.x)
               * smoothstep(0.0, 0.1, vUvv.y) * smoothstep(1.0, 0.9, vUvv.y);
    gl_FragColor = vec4(col, glow * edge * (0.25 + 0.75 * pow(h01, 2.0)));
  }
`

export function createHeroScene(
  container: HTMLElement,
  onModeChange?: (mode: ModeInfo) => void,
): HeroSceneHandle | null {
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    })
  } catch {
    return null
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  const isSmallScreen = window.innerWidth < 768

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setClearColor(0x04060f, 1)
  renderer.domElement.style.position = "absolute"
  renderer.domElement.style.inset = "0"
  renderer.domElement.style.touchAction = "pan-y"
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x04060f, 0.052)

  const camera = new THREE.PerspectiveCamera(
    55,
    container.clientWidth / Math.max(container.clientHeight, 1),
    0.1,
    100,
  )
  const camBase = new THREE.Vector3(0, 3.1, 9.6)
  camera.position.copy(camBase)
  camera.lookAt(0, 0.6, 0)

  // ---------- standing-wave surface ----------
  const PLANE_W = 26
  const PLANE_D = 18
  const segments = isSmallScreen ? 80 : 150
  const planeGeo = new THREE.PlaneGeometry(PLANE_W, PLANE_D, segments, segments)
  planeGeo.rotateX(-Math.PI / 2)

  const setA = modeSetUniforms(0)
  const setB = modeSetUniforms(1)
  const waveUniforms = {
    uTime: { value: 0 },
    uA0: { value: setA[0].clone() },
    uA1: { value: setA[1].clone() },
    uA2: { value: setA[2].clone() },
    uB0: { value: setB[0].clone() },
    uB1: { value: setB[1].clone() },
    uB2: { value: setB[2].clone() },
    uBlend: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uMouseAmp: { value: 0 },
    uGrab: { value: new THREE.Vector4(0.5, 0.5, -100, 0) },
    uPointScale: { value: renderer.getPixelRatio() * 36 },
  }

  const wireMat = new THREE.ShaderMaterial({
    vertexShader: WIRE_VERTEX,
    fragmentShader: WIRE_FRAGMENT,
    uniforms: waveUniforms,
    wireframe: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const wireMesh = new THREE.Mesh(planeGeo, wireMat)
  scene.add(wireMesh)

  const pointsMat = new THREE.ShaderMaterial({
    vertexShader: POINTS_VERTEX,
    fragmentShader: POINTS_FRAGMENT,
    uniforms: waveUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const pointsMesh = new THREE.Points(planeGeo, pointsMat)
  scene.add(pointsMesh)

  // The speaker starts off to the left on desktop so it never hides the
  // headline; on small screens it is skipped entirely (7 MB of textures).
  const speakerAnchor = new THREE.Vector3(-4.6, 1.6, -0.8)
  const showSpeaker = !isSmallScreen

  // ---------- looping wavefront rings on the wave sheet ----------
  const RING_COUNT = 3
  const rings: THREE.Mesh[] = []
  const ringGeo = new THREE.RingGeometry(0.96, 1.0, 96)
  ringGeo.rotateX(-Math.PI / 2)
  for (let i = 0; i < RING_COUNT; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x35d5ee,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const ring = new THREE.Mesh(ringGeo, mat)
    scene.add(ring)
    rings.push(ring)
  }

  // One-shot burst rings fired when the speaker is grabbed.
  const BURST_POOL = 4
  const bursts: { mesh: THREE.Mesh; t0: number }[] = []
  for (let i = 0; i < BURST_POOL; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xe879f9,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const mesh = new THREE.Mesh(ringGeo, mat)
    mesh.visible = false
    scene.add(mesh)
    bursts.push({ mesh, t0: -100 })
  }
  let burstCursor = 0

  // ---------- ambient particle field ----------
  const STAR_COUNT = isSmallScreen ? 180 : 380
  const starPositions = new Float32Array(STAR_COUNT * 3)
  for (let i = 0; i < STAR_COUNT; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 40
    starPositions[i * 3 + 1] = Math.random() * 12 + 0.5
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 40
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
  const starMat = new THREE.PointsMaterial({
    color: 0x7ecbdd,
    size: 0.045,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)

  // ---------- lights (for the GLTF speaker) ----------
  scene.add(new THREE.AmbientLight(0x8899bb, 0.7))
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.4)
  keyLight.position.set(4, 8, 6)
  scene.add(keyLight)
  const cyanLight = new THREE.PointLight(0x22d3ee, 22, 18)
  cyanLight.position.set(-3.5, 3, 2.5)
  scene.add(cyanLight)
  const magentaLight = new THREE.PointLight(0xd946ef, 18, 18)
  magentaLight.position.set(3.5, 2.5, -2)
  scene.add(magentaLight)

  // ---------- floating, grabbable speaker ----------
  const speakerGroup = new THREE.Group()
  speakerGroup.position.copy(speakerAnchor)
  speakerGroup.visible = false
  scene.add(speakerGroup)
  let hitbox: THREE.Mesh | null = null

  let disposed = false
  const loader = new GLTFLoader()
  if (showSpeaker)
    loader.load(
      "/object_assets/speaker/scene.gltf",
      (gltf) => {
        if (disposed) return
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        const scale = 2.4 / Math.max(size.x, size.y, size.z)
        model.scale.setScalar(scale)
        model.position.sub(center.multiplyScalar(scale))
        // The model lies flat (drivers facing +y); stand it upright so the
        // drivers face the camera.
        const upright = new THREE.Group()
        upright.rotation.x = Math.PI / 2
        upright.add(model)
        speakerGroup.add(upright)
        // Invisible hitbox for cheap raycasting during hover/grab.
        const hitGeo = new THREE.BoxGeometry(
          size.x * scale + 0.4,
          size.z * scale + 0.4,
          size.y * scale + 0.4,
        )
        const hitMat = new THREE.MeshBasicMaterial({ visible: false })
        hitbox = new THREE.Mesh(hitGeo, hitMat)
        speakerGroup.add(hitbox)
        speakerGroup.visible = true
        speakerGroup.userData.appearAt = clock.getElapsedTime()
        if (prefersReducedMotion) renderStill()
      },
      undefined,
      () => {
        /* speaker is decorative; the wave scene stands on its own if it fails */
      },
    )

  // ---------- mode cycling ----------
  let modeIndex = 0
  let blendStart = -1
  const HOLD_SECONDS = 6
  const BLEND_SECONDS = 2
  let lastSwapTime = 0

  const emitMode = (index: number) => {
    const [nx, ny] = MODE_SEQUENCE[index % MODE_SEQUENCE.length]
    onModeChange?.({ nx, ny, freq: modeFreq(nx, ny) })
  }
  emitMode(0)

  // ---------- pointer interaction ----------
  const raycaster = new THREE.Raycaster()
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const dragPlane = new THREE.Plane()
  const ndc = new THREE.Vector2()
  const hit = new THREE.Vector3()
  let pointerInside = false
  let grabbed = false
  let hoveringSpeaker = false
  let spinSpeed = 0.35
  let vibration = 0
  const grabOffset = new THREE.Vector3()
  const parallax = new THREE.Vector2(0, 0)
  const parallaxTarget = new THREE.Vector2(0, 0)
  // wanderWeight fades the idle drift out while the speaker is held.
  let wanderWeight = 1

  const toNdc = (e: PointerEvent): boolean => {
    const rect = container.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    if (x < 0 || x > 1 || y < 0 || y > 1) return false
    ndc.set(x * 2 - 1, -(y * 2 - 1))
    parallaxTarget.set(x * 2 - 1, y * 2 - 1)
    return true
  }

  const raycastSpeaker = (): boolean => {
    if (!hitbox || !speakerGroup.visible) return false
    raycaster.setFromCamera(ndc, camera)
    return raycaster.intersectObject(hitbox, false).length > 0
  }

  const wanderOffset = (t: number, out: THREE.Vector3) => {
    out.set(
      Math.sin(t * 0.13) * 1.1,
      Math.sin(t * 0.9) * 0.12 + Math.sin(t * 0.27) * 0.25,
      Math.sin(t * 0.07 + 1.7) * 0.7,
    )
  }

  const fireGrabPulse = () => {
    const t = clock.getElapsedTime()
    waveUniforms.uGrab.value.set(
      THREE.MathUtils.clamp(speakerGroup.position.x / PLANE_W + 0.5, 0, 1),
      THREE.MathUtils.clamp(speakerGroup.position.z / PLANE_D + 0.5, 0, 1),
      t,
      1,
    )
    for (let i = 0; i < 2; i++) {
      const b = bursts[burstCursor % BURST_POOL]
      burstCursor++
      b.t0 = t + i * 0.18
      b.mesh.position.set(
        speakerGroup.position.x,
        0.03,
        speakerGroup.position.z,
      )
      b.mesh.visible = true
    }
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!toNdc(e)) {
      pointerInside = false
      return
    }
    pointerInside = true
    raycaster.setFromCamera(ndc, camera)
    if (grabbed) {
      if (raycaster.ray.intersectPlane(dragPlane, hit)) {
        hit.add(grabOffset)
        speakerGroup.position.set(
          THREE.MathUtils.clamp(hit.x, -9, 9),
          THREE.MathUtils.clamp(hit.y, 0.7, 5),
          THREE.MathUtils.clamp(hit.z, -5, 4),
        )
      }
    } else {
      hoveringSpeaker = raycastSpeaker()
      renderer.domElement.style.cursor = hoveringSpeaker ? "grab" : "default"
      if (raycaster.ray.intersectPlane(groundPlane, hit)) {
        waveUniforms.uMouse.value.set(
          THREE.MathUtils.clamp(hit.x / PLANE_W + 0.5, 0, 1),
          THREE.MathUtils.clamp(hit.z / PLANE_D + 0.5, 0, 1),
        )
      }
    }
  }

  const onPointerDown = (e: PointerEvent) => {
    if (!toNdc(e)) return
    if (!raycastSpeaker()) return
    grabbed = true
    hoveringSpeaker = true
    renderer.domElement.style.cursor = "grabbing"
    // Drag on a camera-facing plane through the speaker's current position.
    camera.getWorldDirection(dragPlane.normal)
    dragPlane.setFromNormalAndCoplanarPoint(
      dragPlane.normal,
      speakerGroup.position,
    )
    raycaster.setFromCamera(ndc, camera)
    if (raycaster.ray.intersectPlane(dragPlane, hit)) {
      grabOffset.copy(speakerGroup.position).sub(hit)
    } else {
      grabOffset.set(0, 0, 0)
    }
    fireGrabPulse()
  }

  const onPointerUp = () => {
    if (!grabbed) return
    grabbed = false
    renderer.domElement.style.cursor = hoveringSpeaker ? "grab" : "default"
    // Re-anchor the idle drift where the user left the speaker.
    const w = new THREE.Vector3()
    wanderOffset(clock.getElapsedTime(), w)
    speakerAnchor.copy(speakerGroup.position).sub(w.multiplyScalar(wanderWeight))
    speakerAnchor.y = THREE.MathUtils.clamp(speakerAnchor.y, 0.9, 4.2)
  }

  const onPointerLeaveWindow = () => {
    pointerInside = false
    parallaxTarget.set(0, 0)
  }

  window.addEventListener("pointermove", onPointerMove)
  window.addEventListener("pointerdown", onPointerDown)
  window.addEventListener("pointerup", onPointerUp)
  window.addEventListener("pointercancel", onPointerUp)
  document.documentElement.addEventListener(
    "pointerleave",
    onPointerLeaveWindow,
  )

  // ---------- resize ----------
  const resize = () => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (w === 0 || h === 0) return
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    if (prefersReducedMotion) renderStill()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)

  // ---------- render loop ----------
  const clock = new THREE.Clock()
  let rafId = 0
  let inView = true
  let pageVisible = !document.hidden
  let lastT = 0

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      inView = entries[0]?.isIntersecting ?? true
      syncLoop()
    },
    { threshold: 0.02 },
  )
  intersectionObserver.observe(container)

  const onVisibility = () => {
    pageVisible = !document.hidden
    syncLoop()
  }
  document.addEventListener("visibilitychange", onVisibility)

  const wander = new THREE.Vector3()

  const tick = () => {
    rafId = requestAnimationFrame(tick)
    const t = clock.getElapsedTime()
    const dt = Math.min(t - lastT, 0.05)
    lastT = t
    waveUniforms.uTime.value = t

    // ease cursor influence in/out
    const targetAmp = pointerInside && !grabbed ? 1 : 0
    waveUniforms.uMouseAmp.value +=
      (targetAmp - waveUniforms.uMouseAmp.value) * 0.06

    // mode crossfade scheduling
    if (blendStart < 0 && t - lastSwapTime > HOLD_SECONDS) {
      blendStart = t
      emitMode(modeIndex + 1)
    }
    if (blendStart >= 0) {
      const p = Math.min((t - blendStart) / BLEND_SECONDS, 1)
      waveUniforms.uBlend.value = p * p * (3 - 2 * p)
      if (p >= 1) {
        modeIndex += 1
        const nextA = modeSetUniforms(modeIndex)
        const nextB = modeSetUniforms(modeIndex + 1)
        waveUniforms.uA0.value.copy(nextA[0])
        waveUniforms.uA1.value.copy(nextA[1])
        waveUniforms.uA2.value.copy(nextA[2])
        waveUniforms.uB0.value.copy(nextB[0])
        waveUniforms.uB1.value.copy(nextB[1])
        waveUniforms.uB2.value.copy(nextB[2])
        waveUniforms.uBlend.value = 0
        blendStart = -1
        lastSwapTime = t
      }
    }

    // speaker: idle drift, spin, grab vibration
    if (speakerGroup.visible) {
      const since = t - (speakerGroup.userData.appearAt ?? t)
      const appear = Math.min(since / 1.2, 1)
      speakerGroup.scale.setScalar(0.6 + 0.4 * appear * appear)

      wanderWeight += ((grabbed ? 0 : 1) - wanderWeight) * 0.04
      spinSpeed += ((grabbed ? 2.6 : 0.35) - spinSpeed) * 0.05
      vibration += ((grabbed ? 1 : 0) - vibration) * 0.08

      if (!grabbed) {
        wanderOffset(t, wander)
        const target = wander.multiplyScalar(wanderWeight).add(speakerAnchor)
        speakerGroup.position.lerp(target, 0.06)
      }
      if (vibration > 0.01) {
        speakerGroup.position.x += vibration * 0.02 * Math.sin(t * 87)
        speakerGroup.position.y += vibration * 0.02 * Math.sin(t * 103 + 1)
        speakerGroup.rotation.z = vibration * 0.05 * Math.sin(t * 61)
      } else {
        speakerGroup.rotation.z = 0
      }
      speakerGroup.rotation.y += spinSpeed * dt
    }

    // looping wavefront rings follow the speaker
    const ringX = speakerGroup.visible ? speakerGroup.position.x : 0
    const ringZ = speakerGroup.visible ? speakerGroup.position.z : 0
    for (let i = 0; i < RING_COUNT; i++) {
      const p = (t * 0.22 + i / RING_COUNT) % 1
      rings[i].position.set(ringX, 0.02, ringZ)
      rings[i].scale.setScalar(0.4 + p * 8.5)
      ;(rings[i].material as THREE.MeshBasicMaterial).opacity =
        0.5 * (1 - p) * (1 - p)
    }

    // one-shot grab bursts
    for (const b of bursts) {
      if (!b.mesh.visible) continue
      const p = (t - b.t0) / 1.1
      if (p < 0) continue
      if (p >= 1) {
        b.mesh.visible = false
        continue
      }
      b.mesh.scale.setScalar(0.3 + p * 7)
      ;(b.mesh.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - p)
    }

    stars.rotation.y = t * 0.008

    // camera parallax (frozen while dragging so the speaker tracks the hand)
    if (!grabbed) parallax.lerp(parallaxTarget, 0.045)
    camera.position.x = camBase.x + parallax.x * 1.5
    camera.position.y = camBase.y - parallax.y * 0.7
    camera.lookAt(0, 0.6, 0)

    renderer.render(scene, camera)
  }

  const renderStill = () => {
    waveUniforms.uTime.value = 1.7
    camera.position.copy(camBase)
    camera.lookAt(0, 0.6, 0)
    renderer.render(scene, camera)
  }

  const syncLoop = () => {
    const shouldRun = inView && pageVisible && !prefersReducedMotion
    if (shouldRun && rafId === 0) {
      lastT = clock.getElapsedTime()
      rafId = requestAnimationFrame(tick)
    } else if (!shouldRun && rafId !== 0) {
      cancelAnimationFrame(rafId)
      rafId = 0
    }
  }

  if (prefersReducedMotion) {
    renderStill()
  } else {
    syncLoop()
  }

  const dispose = () => {
    disposed = true
    if (rafId !== 0) cancelAnimationFrame(rafId)
    rafId = 0
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    document.removeEventListener("visibilitychange", onVisibility)
    window.removeEventListener("pointermove", onPointerMove)
    window.removeEventListener("pointerdown", onPointerDown)
    window.removeEventListener("pointerup", onPointerUp)
    window.removeEventListener("pointercancel", onPointerUp)
    document.documentElement.removeEventListener(
      "pointerleave",
      onPointerLeaveWindow,
    )
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.geometry) mesh.geometry.dispose()
      const material = mesh.material as
        | THREE.Material
        | THREE.Material[]
        | undefined
      if (Array.isArray(material)) material.forEach((m) => m.dispose())
      else material?.dispose()
    })
    renderer.dispose()
    if (renderer.domElement.parentElement === container) {
      container.removeChild(renderer.domElement)
    }
  }

  return { dispose }
}
