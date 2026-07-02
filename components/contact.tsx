import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

const inputClasses =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm transition-all duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#04060f] py-20">
      <div className="pointer-events-none absolute top-10 right-1/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            OPEN CHANNEL
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Whether you&rsquo;re hiring for audio research, backend engineering, or creative collaborations, let&rsquo;s connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-cyan-400" />
                <a href="mailto:rahul.peter@gmail.com" className="text-slate-300 hover:text-cyan-300 transition-colors">rahul.peter@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-cyan-400" />
                <span className="text-slate-300">+91 8431940842</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <span className="text-slate-300">Bengaluru, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rahul-peter-172293194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/RP335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* This hidden input is required */}
              <input type="hidden" name="access_key" value="a5972d02-e563-4273-9e99-662aa57e1768" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" className={inputClasses} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" className={inputClasses} required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className={inputClasses} required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className={inputClasses} required></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-200 hover:bg-cyan-400/25 hover:shadow-[0_0_36px_rgba(34,211,238,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
