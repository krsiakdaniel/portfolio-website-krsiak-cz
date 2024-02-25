import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import ProjectsWork from '@/components/ProjectsWork'
import ProjectsPersonal from '@/components/ProjectsPersonal'
import ContactMe from '@/components/ContactMe'

const Page = () => {
  return (
    <div className="pt-10">
      <Hero />
      <Skills />
      <Services />
      <About />
      <ProjectsWork />
      <ProjectsPersonal />
      <ContactMe />
    </div>
  )
}

export default Page
