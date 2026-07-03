import { BarChart3, Headphones, Zap, Mic, Settings, Code } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Acoustic Measurement",
      skills: [
        "Sound Level Meters",
        "FFT & STFT Analysis",
        "Impulse Response",
        "Reverberation Time",
        "MATLAB/Python",
      ],
    },
    {
      icon: Headphones,
      title: "Audio Engineering",
      skills: [
        "DSP Algorithm Design",
        "Pro Tools",
        "Ableton Live",
        "Loudspeaker Tuning",
        "Real-time Audio Plugins",
      ],
    },
    {
      icon: Zap,
      title: "Signal Processing",
      skills: [
        "TDOA & Beamforming",
        "Variational Mode Decomposition",
        "Log-Mel & FOA Feature Extraction",
      ],
    },
    {
      icon: Mic,
      title: "Machine Learning",
      skills: [
        "PyTorch/TensorFlow",
        "Conformer Architectures",
        "Data Augmentation (SpatialScaper, RIRs)",
        "SELD",
      ],
    },
    {
      icon: Settings,
      title: "Microservices & DevOps",
      skills: ["Kotlin/Ktor", "Rust", "Docker & Kubernetes", "CI/CD", "AWS/GCP"],
    },
    {
      icon: Code,
      title: "Creative Coding",
      skills: [
        "React/Next.js",
        "Three.js Waveform Visuals",
        "Max4Live (Gen~)",
        "MIDI Scripting",
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
            Building expertise across the acoustics spectrum
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
