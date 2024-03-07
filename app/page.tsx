import About from '@/components/about'
import Hero from '@/components/Hero'
import ProjectsPersonal from '@/components/projects/ProjectsPersonal'
import ProjectsWork from '@/components/projects/ProjectsWork'
import SkillsMain from '@/components/SkillsMain'
import Skills from '@/components/Skills'

const Page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <SkillsMain />
      <About />
      <ProjectsWork />
      <ProjectsPersonal />
    </div>
  )
}

export default Page
