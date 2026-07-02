"use client"

import { useState, MouseEvent } from "react"
import Image from "next/image"

const LENS_SIZE = 220
const ZOOM = 2.2

// The magnifying-glass-over-audio-backdrop effect from the original hero,
// reincarnated as the resume header: inspect the researcher under the lens.
export default function LensBanner() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ w: 1, h: 1 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setSize({ w: rect.width, h: rect.height })
  }

  return (
    <section
      className="relative h-[45vh] min-h-[320px] overflow-hidden bg-[#04060f]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/cover-3.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority
        />
      </div>

      {/* magnifying lens */}
      <div
        className={`pointer-events-none absolute z-10 hidden overflow-hidden rounded-full border-2 border-cyan-300/60 shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-opacity duration-300 md:block ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: `${LENS_SIZE}px`,
          height: `${LENS_SIZE}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src="/cover-3.png"
          alt=""
          className="pointer-events-none absolute object-cover"
          style={{
            width: size.w * ZOOM,
            height: size.h * ZOOM,
            transform: `translate(${-position.x * ZOOM + LENS_SIZE / 2}px, ${
              -position.y * ZOOM + LENS_SIZE / 2
            }px)`,
            maxWidth: "none",
          }}
        />
      </div>

      {/* title overlay */}
      <div className="pointer-events-none relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 font-mono text-xs tracking-[0.35em] text-cyan-300/90">
          UNDER THE LENS
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Rahul Peter
        </h1>
        <p className="mt-3 text-lg text-slate-300">
          M.Sc. Student in Acoustics &amp; Audio Technology
        </p>
        <p className="mt-6 hidden font-mono text-[11px] tracking-wider text-white/30 md:block">
          MOVE THE LENS · INSPECT THE SIGNAL
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </section>
  )
}
