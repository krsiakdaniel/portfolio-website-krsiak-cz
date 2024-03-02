import PageContainer from '@/components/layout/PageContainer'
import Card from '@/components/shared/Card'
import Components from '@/public/icons/svg/services/components.svg'
import Responsive from '@/public/icons/svg/services/responsive.svg'
import UI from '@/public/icons/svg/services/ui.svg'
import { ID_SERVICES } from '@/utils/constants'

const Services = () => {
  return (
    <PageContainer id={ID_SERVICES}>
      <div className="flex flex-col lg:flex-row bg-blue-100 py-10 px-5 mb-20 rounded-lg">
        <div className="flex flex-col justify-center lg:w-1/2 lg:px-10 py-10 text-center lg:text-left">
          <h2 className="text-5xl font-bold dark:text-white uppercase">What I do</h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 lg:max-w-[550px]">
            I am passionate about creating high-quality products that meet the needs and expectations both of the client
            and the users.
          </p>
        </div>

        <div className="flex justify-center md:items-center mb-4 lg:mb-0 lg:mr-8">
          <Card
            src={Components}
            alt="Code"
            title="React Components"
            description="I create components that are reusable and easy to maintain."
          />
        </div>

        <div className="flex flex-col items-center lg:mr-10">
          <div className="mb-4 lg:mb-8">
            <Card
              src={Responsive}
              alt="Responsive"
              title="Responsive Design"
              description="I make sure that the product looks good on all devices."
            />
          </div>

          <div>
            <Card
              src={UI}
              alt="UI"
              title="UI / UX"
              description="I improve the product UI to be more user-friendly and effective."
            />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Services
