import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      type: "education",
      title: "Master of Science in Acoustics",
      organization: "University Name",
      period: "2023 - Present",
      description:
        "Specializing in architectural acoustics and environmental noise control. Thesis on adaptive acoustic systems.",
      achievements: ["GPA: 3.8/4.0", "Research Assistant", "Acoustical Society Member"],
    },
    {
      type: "work",
      title: "Acoustic Consultant Intern",
      organization: "Acoustic Engineering Firm",
      period: "2023 - Present",
      description:
        "Supporting senior consultants on commercial and residential acoustic projects, conducting field measurements.",
      achievements: ["Led 5+ measurement campaigns", "Proficient in EASE software", "Client presentation experience"],
    },
    {
      type: "certification",
      title: "Certified Audio Engineer",
      organization: "Audio Engineering Society",
      period: "2023",
      description: "Professional certification in audio system design and implementation.",
      achievements: ["Digital Signal Processing", "Loudspeaker Design", "Room Acoustics"],
    },
  ]

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
