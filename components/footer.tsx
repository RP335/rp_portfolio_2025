import { Volume2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Volume2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Your Name</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-1">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
