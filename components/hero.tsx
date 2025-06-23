import { ArrowDown } from "lucide-react"; // Remove Waves from here
import Link from "next/link";

import Image from "next/image"; // 1. Import the Image component

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
       <div className="flex justify-center mb-8">
          {/* 2. Use the Image component instead of the icon */}
          <Image
            src="/bouncing-logo.png" // 3. Point to the file in your `public` folder
            alt="Rahul Peter Logo"
            width={64}  // Corresponds to h-16
            height={64} // Corresponds to w-16
            className="animate-bounce"
            priority // Add this to preload the main hero image
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