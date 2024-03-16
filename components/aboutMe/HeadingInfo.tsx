import PageHeading from '@/components/shared/PageHeading'

const HeadingInfo = () => {
  return (
    <div>
      <PageHeading title="👨‍💻 About Me" />
      <p className="mt-4 text-lg text-neutral-600" data-testid="about-me-introduction">
        I am <span className="font-bold text-violet-600">React Developer</span>, who knows{' '}
        <span className="font-bold text-violet-600">QA Automation</span> and is capable of leading people as{' '}
        <span className="font-bold text-violet-600">Team Leader</span>.
      </p>
    </div>
  )
}

export default HeadingInfo
