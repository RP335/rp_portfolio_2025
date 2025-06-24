import { projectsData } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, Play, ArrowLeft, Users, Target, CheckCircle, Award } from "lucide-react";

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3"><Target className="w-6 h-6 text-blue-600" />The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </section>

            {/* My Role */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3"><Users className="w-6 h-6 text-blue-600" />My Role & Collaborators</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{project.role}</p>
              {project.collaborators && project.collaborators.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {project.collaborators.map(c => (
                     <a href={c.link} key={c.name} target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-blue-50 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors text-sm">
                       {c.name}
                     </a>
                  ))}
                </div>
              )}
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-600" />Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </section>
            
             {/* Key Techniques */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Techniques</h3>
                <ul className="space-y-2">
                    {project.keyTechniques.map(tech => (
                        <li key={tech} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{tech}</span>
                        </li>
                    ))}
                </ul>
            </section>

          </div>

          {/* Right Column (Meta) */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 bg-white p-6 rounded-lg shadow-md space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Links</h3>
                  <div className="flex flex-col space-y-3">
                     <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                        <Play className="w-4 h-4"/>
                        <span>View Demo / Results</span>
                     </a>
                     <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 font-medium hover:underline">
                        <Github className="w-4 h-4"/>
                        <span>Source Code</span>
                     </a>
                  </div>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Results</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.results}</p>
                </div>
             </div>
          </div>
        </div>

         {/* Architecture Diagram */}
        <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">System Architecture</h2>
            <div className="bg-white p-4 rounded-lg shadow-xl">
                 <Image src={project.architectureImg} alt={`${project.title} Architecture`} width={1200} height={800} className="rounded-md" />
            </div>
        </section>

      </div>
    </main>
  );
}