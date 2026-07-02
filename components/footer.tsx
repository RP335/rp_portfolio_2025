import { Volume2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02030a] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">Rahul Peter</span>
            </div>
            <p className="mt-2 font-mono text-[11px] tracking-[0.3em] text-slate-500">
              SOUL &amp; CIRCUITRY
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Rahul Peter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
