import Button from '@/components/Button'

const NotFoundPage = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:py-28 md:py-20 py-10">
          <h1 className="lg:text-display-2xl md:text-display-xl text-display-md font-semibold md:pb-4 pb-2">
            Page Not Found
          </h1>
          <p className="md:text-body-lg text-body-md pb-10 text-neutral-700">
            The page you requested could not be found.
          </p>
          <Button link="/" label="BACK TO HOME" size="lg" />
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
