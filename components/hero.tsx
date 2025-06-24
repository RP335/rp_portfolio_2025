"use client"; // 1. Make this a Client Component

import { useState, MouseEvent } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // 2. State to track mouse position and hover status
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const lensSize = 200; // The size of our magnifying circle
  const zoomLevel = 2;   // How much to zoom in

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3. Add the background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/cover-2.png"
          alt="Background cover image"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </div>

      {/* 4. The Magnifying Lens Effect */}
      <div
        className={`
          absolute z-10 pointer-events-none rounded-full border-4 border-white/50 shadow-2xl backdrop-filter backdrop-brightness-110
          transition-opacity duration-300
          ${isHovering ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: position.x - lensSize / 2,
          top: position.y - lensSize / 2,
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          overflow: 'hidden',
        }}
      >
        {/* The zoomed-in image inside the lens */}
        <Image
          src="/cover-2.png"
          alt="Zoomed background"
          className="absolute"
          style={{
            width: `calc(100% * ${zoomLevel})`,
            height: `calc(100% * ${zoomLevel})`,
            top: `-${position.y * (zoomLevel - 1)}px`,
            left: `-${position.x * (zoomLevel - 1)}px`,
            objectFit: "cover",
            maxWidth: 'none',
          }}
        />
      </div>


      {/* Your original foreground content - now with z-index to stay on top */}
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
          Audio
          <span className="block text-blue-600">Researcher</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Passionate about sound engineering, acoustics, and audio technology. Combining technical
          expertise with creative problem-solving.
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