import React from 'react'
import Image from 'next/image'

import UI from '../public/images/service-icons/ui.svg'
import Responsive from '../public/images/service-icons/responsive.svg'
import Code from '../public/images/service-icons/code.svg'

const Services = () => {
  return (
    <div id="#services">
      <div className="md:container md:mx-auto">
        <div className="pt-5 pb-12 lg:pb-20 lg:pt-0 md:py-16">
          <div className="flex flex-col relative bg-green-100 lg:py-0 py-10">
            <div className="absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0"></div>
            <div className="absolute lg:block hidden h-16 bg-white top-0 left-0 right-0"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 lg:py-32 md:pb-0 pb-4 px-5">
                <h2 className="lg:text-display-lg text-display-md font-semibold pb-4 uppercase">What I do</h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  I am passionate about delivering high-quality products that meet the needs and expectations of the
                  users and the client.
                </p>
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative w-full sm:w-4/5 rounded-lg border border-neutral-300">
                  <div className="bg-white p-8 rounded-lg">
                    <Image src={UI} alt="UI" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">UI/UX Design</p>
                    <p className="text-body-md font-normal text-neutral-600">
                      I make products more user-friendly and effective.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative w-full sm:w-4/5 ">
                  <div className="bg-white p-8 rounded-lg border border-neutral-300">
                    <Image src={Responsive} alt="Responsive" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">Responsive Design</p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Every interaction should be seeamless and intuitive.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-lg border border-neutral-300">
                    <Image src={Code} alt="Code" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">Components</p>
                    <p className="text-body-md font-normal text-neutral-600">
                      I create components that are reusable and easy to maintain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
