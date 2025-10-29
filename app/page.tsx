import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Creatives from "@/components/creatives"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Publications from "@/components/publications"


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Creatives />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}