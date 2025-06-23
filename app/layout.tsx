import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rahul Peter - Acoustics and Audio Engineering Researcher",
  description: "Portfolio showcasing my transition into acoustics engineering and sound design",
  keywords: ["acoustics", "sound engineering", "audio", "portfolio", "engineering"],
  authors: [{ name: "Rahul Peter" }],
  openGraph: {
    title: "Rahul Peter - Acoustics and Audio Engineering Researcher",
    description: "Portfolio showcasing my transition into acoustics engineering and sound design",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
