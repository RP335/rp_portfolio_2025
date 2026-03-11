"use client";

import { useState, MouseEvent } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const lensSize = 200;
  const zoomLevel = 2;

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image Container - Opacity is applied here */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/cover-3.png"
          alt="Background cover image"
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
        />
      </div>

      {/* The Magnifying Lens Effect */}
      <div
        className={`
          absolute z-10 pointer-events-none rounded-full border-4 border-white/50 shadow-2xl
          transition-opacity duration-300
          ${isHovering ? "opacity-100" : "opacity-0"}
          hidden md:block 
        `}
        style={{
          left: position.x,
          top: position.y,
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
        }}
      >
        {/* The zoomed-in image inside the lens - This image is now fully opaque */}
        <img
          src="/cover-3.png"
          alt="Zoomed background"
          className="absolute object-cover pointer-events-none"
          style={{
            width: `calc(100vw * ${zoomLevel})`,
            height: `calc(100vh * ${zoomLevel})`,
            transform: `translate(${-position.x * zoomLevel + lensSize / 2}px, ${-position.y * zoomLevel + lensSize / 2}px)`,
            maxWidth: 'none',
          }}
        />
      </div>

      {/* Your original foreground content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="flex justify-center mb-8">
          <Image
            src="/bouncing-logo.png"
            alt="Rahul Peter Logo"
            width={128}
            height={128}
            className="animate-bounce"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Move this
          <span className="block text-blue-600">Mouse Around</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          I quit my job as a software engineer to pursue my research in Audio/Acoustics. Currently at Aalto University majoring in Acoustics and Audio Tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>

        <Link
          href="#about"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}