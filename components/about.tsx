import { User, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m Rahul Peter — a software engineer turned audio researcher. After two years building backend systems in fintech (Kotlin, Ktor, Rust microservices, DevOps), I discovered my passion for acoustics, signal processing and machine learning. Now I’m headed to Aalto University (M.Sc. Acoustics & Audio Technology, Sept ’25) to dive deep into spatial audio and sound event localization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
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
                  I spent 2 years at PineLabs building scalable fintech microservices (Kotlin + Rust + Docker/Kubernetes), automating deployments, and optimizing webhook failure pipelines. Under the hood I mastered CI/CD, cloud infra and high-throughput data processing.
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
                  • Architectural Acoustics & TDOA: ICASSP research on beamforming and adversarial masking for robust source localization<br />
                  • Psychoacoustics & Interactive Audio: Designing real-time DSP tools for immersive audio experiences
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