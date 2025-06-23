import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function Experience() {
  const experiences = [

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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through education and hands-on experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = getIcon(exp.type)
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{exp.organization}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span key={achIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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
    </section>
  )
}