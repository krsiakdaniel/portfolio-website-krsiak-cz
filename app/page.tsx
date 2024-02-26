import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Hero from '@/components/Hero'
import ProjectsPersonal from '@/components/projects/ProjectsPersonal'
import ProjectsWork from '@/components/projects/ProjectsWork'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

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
