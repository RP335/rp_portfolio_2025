import { FileText, ExternalLink } from "lucide-react"

type Publication = {
  title: string
  authors: string
  venue?: string
  link: string
}

export default function Publications() {
  const publications: Publication[] = [
    {
      title:
        "Adversarial Masking Approach for Robust Target Source Localization in the SH Domain",
      authors:
        "Gyanajyoti Routray, Priyadarshini Dwivedi, Rahul Peter, Rajesh M. Hegde",
      venue: "Asilomar 2025 (Paper #1523)",
      link: "https://cmsworkshops.com/Asilomar2025/view_paper.php?PaperNum=1523",
    },
    {
      title:
        "Real-Time Audio Monitoring Pipeline with Edge Inference and IoT Supervision via ThingsBoard",
      authors: "Rahul Peter, Vivek Mohan",
      venue:
        "AES International Conference on Artificial Intelligence and Machine Learning for Audio 2025 — Late Breaking",
      link: "https://drive.google.com/file/d/1DubDQQ2HyjpSqvUO861CuDj2aR3qZ7Ad/view",
    },
  ]

  return (
    <section id="publications" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-blue-500 uppercase">
            Publications
          </p>
          <h2 className="mt-2 text-3xl font-bold">Selected Papers</h2>
          <p className="mt-2 text-neutral-500">
            Titles, authors, and links to the work. No abstracts here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-blue-50 p-2 text-blue-600">
                  <FileText size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      {pub.title}
                      <ExternalLink size={16} className="opacity-70" />
                    </a>
                  </h3>
                  <p className="text-sm text-neutral-700">{pub.authors}</p>
                  {pub.venue && (
                    <p className="text-sm text-neutral-500">{pub.venue}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
