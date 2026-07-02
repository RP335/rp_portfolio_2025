import { User, Target, Lightbulb } from "lucide-react"

const focusAreas = [
  {
    tag: "ML/DSP · CALIBRATION",
    text: "Models that extract source characteristics from room measurements — current focus at Trinnov",
  },
  {
    tag: "SPATIAL AUDIO · SELD",
    text: "Sound event localization with Conformer models trained on synthetic stereo via SpatialScaper",
  },
  {
    tag: "ACOUSTICS · TDOA",
    text: "ICASSP research on beamforming and adversarial masking for robust source localization",
  },
  {
    tag: "EMBEDDED · HEARING",
    text: "Real-time embedded DSP pipelines for hearing protection (Savox/Otos)",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#04060f] py-24 text-white"
    >
      {/* subtle glow accents to keep continuity with the hero scene */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/5 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            SIGNAL PATH
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            About My Journey
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            I started out making music in my bedroom when I was 15, and I got
            deep into production during my later years. During my undergrad,
            coursework in DSP and math brought me closer to my interests. I
            couldn&apos;t go for my higher studies right after my bachelor&apos;s (to
            save up), during which I worked as a software engineer. During this
            time, I was able to beef up my coding skills and craft a path for me
            to pursue my research in acoustics and signal processing (which I&apos;m
            now invested in at Aalto). I&apos;m continuing to do this by
            participating in challenges with ML/Audio/Acoustics and even winning
            one this year. I&apos;ll continue to push these boundaries.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-500/40 via-transparent to-fuchsia-500/40 opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src="/rp_profile_image_portfolio.jpg?height=650&width=500"
              alt="Professional headshot"
              className="relative w-full rounded-xl border border-white/10 shadow-2xl"
            />
            <p className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-200 backdrop-blur-sm">
              SOUL &amp; CIRCUITRY
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30">
              <div className="flex items-start space-x-4">
                <User className="mt-1 h-7 w-7 flex-shrink-0 text-cyan-400" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Background
                  </h3>
                  <p className="leading-relaxed text-slate-400">
                    Following 2 years at PineLabs building scalable fintech
                    microservices, I transitioned into specialized acoustics and
                    audio research. Currently, I&apos;m an RnD Intern at Trinnov
                    Audio in Paris, working on advanced ML/DSP methods for
                    loudspeaker characterization in collaboration with Inria.
                    Living and working in France has been an enriching
                    experience, allowing me to contribute to cutting-edge audio
                    technologies while immersing myself in a new cultural and
                    professional environment that bridges industry and academia.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30">
              <div className="flex items-start space-x-4">
                <Target className="mt-1 h-7 w-7 flex-shrink-0 text-cyan-400" />
                <div className="w-full">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Focus Areas
                  </h3>
                  <ul className="space-y-3">
                    {focusAreas.map((area) => (
                      <li key={area.tag} className="flex flex-col gap-1">
                        <span className="font-mono text-[11px] tracking-wider text-fuchsia-300/90">
                          {area.tag}
                        </span>
                        <span className="text-sm leading-relaxed text-slate-400">
                          {area.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30">
              <div className="flex items-start space-x-4">
                <Lightbulb className="mt-1 h-7 w-7 flex-shrink-0 text-cyan-400" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Approach
                  </h3>
                  <p className="leading-relaxed text-slate-400">
                    I try to deconstruct complex technical logic (which I used
                    to abstract in my early days) and apply the same to
                    real-world scenarios. Now I&apos;m learning more at my uni!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hairline transition into the light sections below */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </section>
  )
}
