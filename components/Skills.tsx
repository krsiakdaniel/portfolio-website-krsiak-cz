import React from 'react'

const Skills = () => {
  return (
    <div id="#skills">
      <div className="container mx-auto">
        <div className="md:py-10 pt-8 pb-6">
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">My Skills</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-10">
            <div className="flex justify-center mb-4 sm:mb-0">
              <img src="https://skillicons.dev/icons?i=html" alt="skill-icon" className="h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=css" alt="skill-icon" className=" h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=scss" alt="skill-icon" className="h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=tailwind" alt="skill-icon" className="h-14 sm:mr-2" />
            </div>
            <div className="flex justify-center mb-4 sm:mb-0">
              <img src="https://skillicons.dev/icons?i=js" alt="skill-icon" className="h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=ts" alt="skill-icon" className="h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=react" alt="skill-icon" className="h-14 mr-2" />
              <img src="https://skillicons.dev/icons?i=next" alt="skill-icon" className="h-14 sm:mr-2" />
            </div>
            <div className="flex justify-center">
              <img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" className="h-14" />
            </div>
          </div>
          <div>
            <p className="italic text-neutral-500 mt-4 text-center">
              HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
