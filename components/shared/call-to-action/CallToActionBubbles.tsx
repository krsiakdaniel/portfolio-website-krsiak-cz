import Bubble from '@/components/shared/call-to-action/Bubble'

const animationCss = 'animate-pulse-bubble'

const CallToActionBubbles = () => {
  return (
    <>
      <Bubble
        customCss={`bg-blue-300 -left-6 -top-8 2xl:-left-10 h-24 w-24 transition duration-500 ${animationCss}`}
      />
      <Bubble
        customCss={`bg-violet-400 -right-6 -top-12 2xl:-right-8 2xl:-top-14 h-36 w-36 transition duration-500 ${animationCss}`}
      />
      <Bubble
        customCss={`bg-blue-400 -bottom-8 -right-6 2xl:-bottom-10 2xl:-right-8 h-28 w-28 transition duration-500 ${animationCss}`}
      />
    </>
  )
}

export default CallToActionBubbles
