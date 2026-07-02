import { ExternalLink } from "lucide-react"

export default function Creatives() {
  return (
    <section id="creatives" className="relative bg-[#04060f] py-20">
      <div className="pointer-events-none absolute bottom-0 left-1/5 h-64 w-64 rounded-full bg-fuchsia-500/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            WET SIGNAL
          </p>
          <h2 className="text-3xl font-bold text-white">The Creatives</h2>
          <p className="text-slate-400 mt-2">
            Side quests in music production and interactive audio tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30">
            <h3 className="text-xl font-semibold text-white mb-4">
              Electronic Music by me
            </h3>
            <iframe
              title="SoundCloud Player"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="rounded-lg"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gr8beatz-320169455&color=%2322d3ee"
            ></iframe>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-fuchsia-400/30">
            <h3 className="text-xl font-semibold text-white mb-2">
              Other shenanigans
            </h3>
            <p className="text-slate-400 mb-4">
              All my other work aside from the above mentioned is on this site
            </p>
            <a
              href="https://rp335.github.io/rp_portfolio/"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              RP&apos;s den <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
