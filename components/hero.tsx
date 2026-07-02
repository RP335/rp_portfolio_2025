"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { createHeroScene, type ModeInfo } from "@/components/hero-scene"

export default function Hero() {
  const canvasHostRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<ModeInfo>({ nx: 1, ny: 1, freq: 51.5 })
  const [webglFailed, setWebglFailed] = useState(false)

  useEffect(() => {
    const host = canvasHostRef.current
    if (!host) return
    const handle = createHeroScene(host, setMode)
    if (!handle) {
      setWebglFailed(true)
      return
    }
    return () => handle.dispose()
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04060f] text-white">
      {/* Three.js canvas mounts here */}
      <div ref={canvasHostRef} className="absolute inset-0" aria-hidden="true" />

      {/* Static fallback when WebGL is unavailable */}
      {webglFailed && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060f] via-[#0a1130] to-[#04060f]" />
      )}

      {/* Soft vignette so the text stays readable over the brightest crests */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,6,15,0)_35%,rgba(4,6,15,0.75)_100%)]" />

      {/* HUD: live modal readout */}
      <div className="pointer-events-none absolute left-4 top-20 hidden select-none font-mono text-[11px] leading-relaxed tracking-wider text-cyan-300/70 sm:left-8 md:block">
        <p>
          ROOM&nbsp;&nbsp;: 6.0 m × 4.0 m · c = 343 m/s
        </p>
        <p className="text-cyan-200">
          MODE&nbsp;&nbsp;: ({mode.nx}, {mode.ny}) · f ={" "}
          {mode.freq.toFixed(1)} Hz
        </p>
        <p className="text-fuchsia-300/70">
          ψ(x,y,t) = Σ sin(nπx/Lx)·sin(mπy/Ly)·cos(ωt)
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-4 hidden select-none font-mono text-[11px] tracking-wider text-white/30 sm:right-8 md:block">
        <p>CURSOR = POINT SOURCE · GRAB THE SPEAKER</p>
      </div>

      {/* Foreground content — pointer-events pass through to the scene except
          on the actual links, so the speaker stays grabbable everywhere */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-6 font-mono text-xs tracking-[0.35em] text-cyan-300/90 sm:text-sm">
          ACOUSTICS · DSP · MACHINE LEARNING
        </p>

        <h1
          aria-label="Rahul Peter"
          className="mb-8 flex items-end justify-center gap-3 text-6xl font-bold leading-none md:gap-4 md:text-8xl"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="inline-block animate-[dot-pulse_2.4s_ease-in-out_infinite] bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent"
              style={{ animationDelay: `${i * 0.24}s` }}
            >
              .
            </span>
          ))}
        </h1>

        <p className="mb-5 max-w-3xl text-lg italic text-slate-200 [text-shadow:0_2px_24px_rgba(4,6,15,0.95),0_0_8px_rgba(4,6,15,0.8)] md:text-2xl">
          &ldquo;What&apos;s a function of what the whole universe is doing is
          you just like the wave being that of the ocean.&rdquo;
        </p>

        <p className="mb-10 font-mono text-xs text-cyan-100 [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_28px_rgba(34,211,238,0.55),0_2px_12px_rgba(4,6,15,0.9)] sm:text-sm">
          M.Sc. Acoustics &amp; Audio Technology @ Aalto University · R&amp;D @
          Trinnov Audio, Paris
        </p>

        <div className="mb-14 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            className="pointer-events-auto rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-8 py-3 font-semibold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur-sm transition-all duration-200 hover:bg-cyan-400/25 hover:shadow-[0_0_36px_rgba(34,211,238,0.45)]"
          >
            Explore Research
          </Link>
          <Link
            href="#contact"
            className="pointer-events-auto rounded-lg border border-fuchsia-400/50 bg-fuchsia-400/5 px-8 py-3 font-semibold text-fuchsia-200 backdrop-blur-sm transition-all duration-200 hover:bg-fuchsia-400/20 hover:shadow-[0_0_36px_rgba(232,121,249,0.4)]"
          >
            Get in Touch
          </Link>
        </div>

        <Link
          href="#about"
          className="pointer-events-auto inline-flex items-center text-slate-400 transition-colors duration-200 hover:text-cyan-300"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
