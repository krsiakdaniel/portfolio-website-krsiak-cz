import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Jobs from '@/components/Jobs'

const Page = () => {
  return (
    <div className="pt-10">
      <Hero />
      <Skills />
      <Services />
      <About />
      <Jobs />
    </div>
  )
}

export default Page
