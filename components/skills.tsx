import { Atom, Waves, BarChart3, Mic, Piano, Code } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Atom,
      title: "Computational Acoustics",
      skills: [
        "Finite-difference / FDTD wave solvers",
        "Incompressible Navier–Stokes & aeroacoustics (Lighthill)",
        "Physical modelling (strings, hammers, modal synthesis)",
        "Inverse problems & system identification",
        "GPU / HPC simulation",
      ],
    },
    {
      icon: Waves,
      title: "Signal Processing",
      skills: [
        "Spectral & partial tracking (STFT, inharmonicity)",
        "Room modes & loudspeaker–room calibration",
        "TDOA, beamforming, spherical harmonics",
        "Real-time DSP (C++, embedded)",
      ],
    },
    {
      icon: Mic,
      title: "Machine Learning",
      skills: [
        "PyTorch / TensorFlow",
        "Physics-guided & hybrid models",
        "Conformers, SELD, audio encoders",
        "Data augmentation (SpatialScaper, RIRs)",
      ],
    },
    {
      icon: BarChart3,
      title: "Acoustic Measurement",
      skills: [
        "Impulse responses & reverberation time",
        "In-room loudspeaker measurements",
        "KEMAR / psychoacoustic testing",
        "MATLAB / Python analysis",
      ],
    },
    {
      icon: Piano,
      title: "Audio & Music",
      skills: [
        "JUCE / C++ audio plugins",
        "Session piano & composition",
        "Production, mixing, mastering (Ableton, Pro Tools)",
        "Max4Live (Gen~), MIDI / MPE",
      ],
    },
    {
      icon: Code,
      title: "Software & Systems",
      skills: [
        "Python, C++, Rust, Kotlin",
        "React / Next.js, Three.js, Web Audio",
        "Docker, Kubernetes, CI/CD",
        "AWS / GCP, ParaView",
      ],
    },
  ]

  return (
    <section id="skills" className="relative bg-[#070b18] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            FREQUENCY BANDS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            As you can see, I've worked across a lot of domains but code's common to all of it (80% acoustics and audio signal-processing).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  {/* mini equalizer, animates on hover */}
                  <div
                    className="flex h-6 items-end gap-[3px]"
                    aria-hidden="true"
                  >
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className="w-[3px] h-full origin-bottom rounded-full bg-gradient-to-t from-cyan-400 to-fuchsia-400 opacity-40 transition-opacity duration-300 [animation-play-state:paused] group-hover:opacity-100 group-hover:[animation-play-state:running] animate-[eq-bar_0.9s_ease-in-out_infinite]"
                        style={{
                          animationDelay: `${bar * 0.12}s`,
                          transform: "scaleY(0.25)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-slate-400 flex items-center transition-colors duration-200 group-hover:text-slate-300"
                    >
                      <span className="w-2 h-2 bg-cyan-400/70 rounded-full mr-3 flex-shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
