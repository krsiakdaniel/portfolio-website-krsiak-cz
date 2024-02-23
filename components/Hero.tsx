import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid pt-20 pb-20 grid-cols-1 lg:grid-cols-12 flex-col justify-between items-center text-center">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 flex flex-col items-center">
            <h1 className="lg:text-display-2xl md:text-display-xl text-display-md">
              <span className="text-primary-500 font-bold">Daniel Kršiak</span>
            </h1>
            <h2 className="lg:text-display-2xl md:text-display-xl text-display-md">
              <span className="font-semibold">React Developer</span>
            </h2>
            <p className="md:text-body-xl text-body-lg pb-1 pt-4 font-medium">
              Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
            </p>
            <p className="md:text-body-xl text-body-lg pb-8">
              I enjoy working with <span className="text-primary-500">JavaScript</span>,{' '}
              <span className="text-primary-500">TypeScript</span>, and <span className="text-primary-500">React</span>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="flex mb-4 sm:mr-4 sm:mb-0">
                <Button label="LINKEDIN" link="https://www.linkedin.com/in/krsiakdaniel/" size="lg" />
              </div>
              <div className="flex mb-4 sm:mr-4 sm:mb-0">
                <Button label="GITHUB" link="https://github.com/krsiakdaniel/" size="lg" type="bg-neutral-900" />
              </div>
              <div className="flex mb-0 mr-0">
                <Button
                  label="DOWNLOAD RESUME"
                  link="https://drive.google.com/file/d/1x0LWu8I_3aqW34TJbxkciqNGX642bdvF/view?usp=sharing"
                  size="lg"
                  type="bg-red-500"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
