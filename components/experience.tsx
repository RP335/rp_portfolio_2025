import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "RnD Intern – Trinnov Audio",
      organization: (
        <span>
          <a href="https://www.trinnov.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline">Trinnov Audio</a>, Paris (co-supervised by <a href="https://www.inria.fr/en" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline">Inria</a>)
        </span>
      ),
      period: "Feb 2026 – Present",
      description: (
        <span>
          Developing ML/DSP methods to extract loudspeaker characteristics from room measurements for improved calibration.
          Supervised by Romain Couderc and <a href="https://www.researchgate.net/profile/Theophile_Dupre" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline">Théophile Dupré</a>.
          Co-supervised by <a href="https://members.loria.fr/ADeleforge/home/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline">Antoine Deleforge</a> (Inria).
          Working within the research team headed by <a href="https://www.linkedin.com/in/miguelmoleron/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline">Miguel Moleron</a> and Axel Coulon.
        </span>
      ),
      achievements: [
        "Collaborating with Inria research teams",
        "Exploring advanced ML architectures for room acoustic decoupling"
      ]
    },
    {
      type: "education",
      title: "M.Sc. Acoustics & Audio Technology (incoming)",
      organization: "Aalto University",
      period: "Sept 2025 – Present",
      description:
        "Specializing in spatial audio, environmental noise control, and psychoacoustics.",
      achievements: ["Awarded with the Aalto Excellency scholarship"]
    },
    {
      type: "work",
      title: "Backend Developer – PineLabs (Fintech)",
      organization: "PineLabs, Bengaluru",
      period: "2023 – 2025",
      description:
        "Designed and maintained Kotlin/Ktor microservices, built Rust DLQ processors for webhook reliability, and led CI/CD pipelines on Kubernetes.",
      achievements: [
        "Reduced webhook failures by 36% with Rust retry logic",
        "Automated 10+ deployment pipelines (Docker, Helm)",
      ]
    },
    {
      type: "work",
      title: "Researcher (part time) – Multimodal Information Processing Lab",
      organization: "IIT Kanpur",
      period: "Jul 2024 – Sep 2024",
      description:
        "Conducted beamforming and TDOA experiments for source localization. Drafted an ICASSP and ASILOMAR paper on adversarial masking.",
      achievements: ["Part of the research team for the publications"]
    },
    {
      type: "education",
      title: "B.E. Electronics & Communication",
      organization: "Birla Institute of Technology and Science, Pilani, K.K. Birla Goa Campus",
      period: "2019 – 2023",
      description:
        "Specializing in Signal Processing, Programming, Applied Mathematics and Algorithms.",
      achievements: ["CGPA: 8.14/10.00", "Research in Speech Signal Processing"]
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return GraduationCap
      case "work":
        return Briefcase
      case "certification":
        return Award
      default:
        return Briefcase
    }
  }

  return (
    <section id="experience" className="relative bg-[#070b18] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            IMPULSE RESPONSE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Building expertise through education and hands-on experience
          </p>
        </div>

        {/* timeline rail */}
        <div className="relative">
          <div className="pointer-events-none absolute left-[2.45rem] top-2 bottom-2 hidden w-px bg-gradient-to-b from-cyan-400/50 via-fuchsia-400/30 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = getIcon(exp.type)
              return (
                <div
                  key={index}
                  className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]">
                        <IconComponent className="h-6 w-6 text-cyan-300" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <span className="font-mono text-sm text-fuchsia-300/90">{exp.period}</span>
                      </div>
                      <p className="text-slate-300 font-medium mb-2">{exp.organization}</p>
                      <p className="text-slate-400 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
