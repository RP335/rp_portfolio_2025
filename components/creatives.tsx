export default function Creatives() {
  return (
    <section id="creatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">The Creatives</h2>
          <p className="text-gray-600">Side quests in music production and interactive audio tools</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Electronic Music by me</h3>
            <iframe
              title="SoundCloud Player"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gr8beatz-320169455&color=%230066cc"
            ></iframe>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Other shenanigans</h3>
            <p className="text-gray-600 mb-4">
              All my other work aside from the above mentioned is on this site
            </p>
            <a href="https://rp335.github.io/rp_portfolio/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              RP's den
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}