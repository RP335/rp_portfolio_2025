"use client"

import { useState } from "react"
import { FileText, ExternalLink, Quote, Check } from "lucide-react"

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
      title: "Class-Aware Hybrid Ensemble for Query-by-Vocal Imitation",
      authors: "Rahul Peter, Vivek Mohan",
      venue:
        "AES International Conference on Artificial Intelligence and Machine Learning for Audio 2025",
      link: "https://doi.org/10.5281/zenodo.18289124",
    },
    {
      title:
        "INTRUSIVE LYRIC INTELLIGIBILITY VIA HYBRID ATTENTION OVER ASR EMBEDDINGS AND FEATURE BLOCKS",
      authors: "Rahul Peter, Vivek Mohan, Seralathan Subramanian, Lauri Juvela",
      venue: "ICASSP 2026 (Published)",
      link: "https://ieeexplore.ieee.org/document/11464474",
    },
  ]

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyCitation = async (pub: Publication, index: number) => {
    const citation = `${pub.authors}. "${pub.title}." ${pub.venue ?? ""} ${pub.link}`.trim()
    try {
      await navigator.clipboard.writeText(citation)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex((c) => (c === index ? null : c)), 2000)
    } catch {
      /* clipboard unavailable — nothing to do */
    }
  }

  return (
    <section id="publications" className="relative bg-[#070b18] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.35em] text-cyan-300/80">
            PEER REVIEWED
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Selected Papers
          </h2>
          <p className="mt-2 text-slate-400">
            Titles, authors, and links to the work. No abstracts here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
                  <FileText size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-cyan-200 transition-colors"
                    >
                      {pub.title}
                      <ExternalLink size={16} className="opacity-70 flex-shrink-0" />
                    </a>
                  </h3>
                  <p className="text-sm text-slate-300">{pub.authors}</p>
                  {pub.venue && (
                    <p className="font-mono text-xs tracking-wide text-fuchsia-300/80">
                      {pub.venue}
                    </p>
                  )}
                  <button
                    onClick={() => copyCitation(pub, i)}
                    className="mt-1 inline-flex items-center gap-1.5 rounded border border-white/15 px-2.5 py-1 font-mono text-[11px] tracking-wider text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    {copiedIndex === i ? (
                      <>
                        <Check size={12} className="text-cyan-300" /> COPIED
                      </>
                    ) : (
                      <>
                        <Quote size={12} /> COPY CITATION
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
