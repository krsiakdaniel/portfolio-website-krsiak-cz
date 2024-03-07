import About from '@/components/about'
import Hero from '@/components/Hero'
import ProjectsPersonal from '@/components/projects/ProjectsPersonal'
import ProjectsWork from '@/components/projects/ProjectsWork'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

const Page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <About />
      <ProjectsWork />
      <ProjectsPersonal />
    </div>
  )
}

export default Page
