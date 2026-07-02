import { ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projectsData } from "@/lib/projects-data"

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#04060f] py-20">
      <div className="pointer-events-none absolute top-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            OUTPUT STAGE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing practical applications of acoustic engineering principles
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden bg-[#0a0f1e]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/60 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  <Link
                    href={project.detailsLink || `/projects/${project.slug}`}
                    className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
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
