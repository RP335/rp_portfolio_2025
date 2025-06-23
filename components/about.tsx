import { User, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m Rahul Peter — an aspiring audio researcher with a deep fascination for acoustics, signal processing, and audio information retrieval. Over the past few years I’ve dabbled in hands-on research: developing beamforming and TDOA algorithms for sound source localization, experimenting with ambisonics, and fine-tuning audio transformers for query-by-vocal-imitation. Alongside my research, I've worked as a software engineer in Rust and Python to build data pipelines and deployment workflows, ensuring reproducible experiments and scalable processing. Next up: M.Sc. in Acoustics & Audio Technology at Aalto University (Sept ’25), where I’ll push these explorations even further.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/rp_profile_image_portfolio.jpg?height=650&width=500"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Background</h3>
                <p className="text-gray-600">
                  I spent 2 years at PineLabs building scalable fintech microservices (Kotlin + Rust + Docker/Kubernetes), automating deployments, and optimizing webhook failure pipelines. Under the hood I mastered CI/CD, cloud infra and high-throughput data processing. Besides these, I've been invested in spatial audio and 3D signal processing research (more particularly sound source localization). Other than that I engage in audio information reretrieval and deep learning for audio signal processing
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus Areas</h3>
                <p className="text-gray-600">
                  • Spatial Audio & SELD: Sound event localization with Conformer models trained on synthetic stereo via SpatialScaper<br />
                  • DCASE & QVIM Challenges: Ensemble-based ML pipelines (PaSST, PANNs, BEATs) with DSP-driven data augmentation<br />
                  • Acoustics & TDOA: ICASSP research on beamforming and adversarial masking for robust source localization<br />
                  • Psychoacoustics & Interactive Audio: Designing real-time DSP tools for immersive audio experiences (plugin in the works)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Approach</h3>
                <p className="text-gray-600">
                  I combine scientific rigor (TDOA equations, ambisonics, objective metrics) with creative coding (Max4Live devices, generative MIDI, interactive React demos). Every project blends measured data, ML models and UX-focused visuals to tell a sonic story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}