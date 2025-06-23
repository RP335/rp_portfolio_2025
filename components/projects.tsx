import { ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Concert Hall Acoustic Analysis",
      description:
        "Comprehensive acoustic measurement and analysis of a 1,200-seat concert hall, including reverberation time optimization and sound distribution mapping.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Architectural Acoustics", "EASE", "Measurement"],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
    {
      title: "Urban Noise Mapping Project",
      description:
        "Created detailed noise maps for a metropolitan area using IoT sensors and machine learning algorithms to predict noise pollution patterns.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Environmental Acoustics", "IoT", "Machine Learning"],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
    {
      title: "Active Noise Control System",
      description:
        "Developed an adaptive ANC system for industrial applications using real-time signal processing and custom hardware implementation.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Signal Processing", "Hardware", "Control Systems"],
      demoLink: "#",
      codeLink: "#",
      featured: false,
    },
    {
      title: "Psychoacoustic Audio Processor",
      description:
        "Built a real-time audio processor that applies psychoacoustic principles to enhance perceived audio quality in low-bandwidth scenarios.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Psychoacoustics", "DSP", "Audio Engineering"],
      demoLink: "#",
      codeLink: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of acoustic engineering principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={project.demoLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                  <Link
                    href={project.codeLink}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
