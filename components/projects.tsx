import { ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "DCASE 2025 SELD Challenge",
      description:
        "Built a Conformer-based ensemble for stereo sound event localization. Generated synthetic spatial data with SpatialScaper, implemented log-Mel & FOA feature pipelines in Rust with Rayon parallelism. Achieved macro F-score improvement on underrepresented classes.",
      image: "/screenshots/dcase-seld.gif",
      tags: ["SpatialScaper", "Conformer", "Rust", "PyTorch", "SELD"],
      demoLink: "https://github.com/rahulpeter/dcase-seld",
      codeLink: "https://github.com/rahulpeter/dcase-seld",
      detailsLink: "/projects/dcase-2025"
    },
    {
      title: "QVIM AES 2025 Challenge",
      description:
        "Developed an ensemble of PaSST, PANNs, BEATs and MobileNetV3 for query-by-vocal-imitation. Combined DSP-based data augmentation and fine-tuning of pretrained audio transformers to boost MRR score.",
      image: "/screenshots/qvim-demo.gif",
      tags: ["PaSST", "PANNs", "Data Augmentation", "DSP", "Fine-tuning"],
      demoLink: "https://github.com/rahulpeter/qvim-ensemble",
      codeLink: "https://github.com/rahulpeter/qvim-ensemble",
      detailsLink: "/projects/qvim-aes2025"
    },
    {
      title: "IIT Kanpur ICASSP Research (Jul–Sep 2024)",
      description:
        "Collaborated on adversarial masking techniques for robust sound source localization. Derived TDOA equations, conducted beamforming experiments and drafted an ICASSP paper under Dr. Priya D.",
      image: "/screenshots/icassp-paper.png",
      tags: ["TDOA", "Beamforming", "Adversarial Masking", "ICASSP 2025"],
      demoLink: "mailto:professor@iitk.ac.in?subject=Request%20ICASSP%20Draft",
      codeLink: "https://github.com/rahulpeter/icassp-seld",
      detailsLink: "/projects/iitk-icaspp"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of acoustic engineering principles
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                    href={project.detailsLink}
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