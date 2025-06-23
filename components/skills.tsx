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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building expertise across the acoustics spectrum</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
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