import { User, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discovering the fascinating world of acoustics and sound engineering
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
                  With a foundation in [your previous field], I've discovered my passion for acoustics and sound
                  engineering. This transition represents my commitment to understanding how sound shapes our
                  environment and experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus Areas</h3>
                <p className="text-gray-600">
                  Specializing in architectural acoustics, environmental noise control, audio system design, and
                  psychoacoustics. I'm particularly interested in sustainable acoustic solutions and emerging audio
                  technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Approach</h3>
                <p className="text-gray-600">
                  I believe in combining scientific rigor with creative problem-solving. Every acoustic challenge is an
                  opportunity to improve how people experience and interact with their sonic environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
