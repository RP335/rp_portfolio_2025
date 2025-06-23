export default function Creatives() {
  return (
    <section id="creatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Creative & Music Projects</h2>
          <p className="text-gray-600">Side quests in music production and interactive audio tools</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Electronic & Video Game Music</h3>
            <iframe
              title="SoundCloud Player"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yourusername&color=%230066cc"
            ></iframe>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Max4Live Audio Tools</h3>
            <p className="text-gray-600 mb-4">
              Built custom Ableton devices for dynamic side-chain routing and live parameter morphing. Available on GitHub:
            </p>
            <a href="https://github.com/rahulpeter/max4live-devices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/rahulpeter/max4live-devices
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}