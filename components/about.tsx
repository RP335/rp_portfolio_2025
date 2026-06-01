import { User, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I started out making music in my bedroom when I was 15, and I got deep into production during my later years. During my undergrad, coursework in DSP and math brought me closer to my interests. I couldn't go for my higher studies right after my bachelors's (to save up), during which I worked as a software engineer. During this time, I was able to beef up my coding skills and craft a path for me to pursue my research in acoustics and signal processing (which I'm now invested in at Aalto). I'm continuing to do this by participating in challenges with ML/Audio/Acoustics and even winning one this year. I'll continue to push these boundaries.
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
                  Following 2 years at PineLabs building scalable fintech microservices, I transitioned into specialized acoustics and audio research. Currently, I'm an RnD Intern at Trinnov Audio in Paris, working on advanced ML/DSP methods for loudspeaker characterization in collaboration with Inria. Living and working in France has been an enriching experience, allowing me to contribute to cutting-edge audio technologies while immersing myself in a new cultural and professional environment that bridges industry and academia.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus Areas</h3>
                <p className="text-gray-600">
                  • ML/DSP for Calibration: Developing models to extract source characteristics from room measurements (current focus at Trinnov)<br />
                  • Spatial Audio & SELD: Sound event localization with Conformer models trained on synthetic stereo via SpatialScaper<br />
                  • Acoustics & TDOA: ICASSP research on beamforming and adversarial masking for robust source localization<br />
                  • Personalised Hearing: Real-time embedded DSP pipelines for hearing protection (Savox/Otos)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Approach</h3>
                <p className="text-gray-600">
                  I try to deconstruct complex technical logic (which I used to abstract in my early days) and apply the same to real-world scenarios. Now I'm learning more at my uni!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}