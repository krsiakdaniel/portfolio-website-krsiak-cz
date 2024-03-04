import PageContainer from '@/components/layout/PageContainer'
import Card from '@/components/shared/Card'
import Components from '@/public/icons/svg/services/components.svg'
import Responsive from '@/public/icons/svg/services/responsive.svg'
import UI from '@/public/icons/svg/services/ui.svg'
import { ID_SERVICES } from '@/utils/constants'

const Services = () => {
  return (
    <PageContainer id={ID_SERVICES}>
      <div className="mb-20 flex flex-col rounded-lg border border-dashed bg-green-100 px-5 py-10 lg:flex-row">
        <div className="flex flex-col justify-center py-10 text-center lg:w-1/2 lg:px-10 lg:text-left">
          <h2 className="text-5xl font-bold uppercase dark:text-white">What I&nbsp;do</h2>
          <p className="mb-4 text-lg font-normal text-neutral-600 dark:text-neutral-600 lg:max-w-[550px]">
            I am passionate about creating high-quality products that meet the needs and expectations both of the client
            and the users.
          </p>
        </div>

        <div className="mb-4 flex justify-center md:items-center lg:mb-0 lg:mr-8">
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
