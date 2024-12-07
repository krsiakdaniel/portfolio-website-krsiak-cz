import Photo from '@/components/aboutMe/Photo'
import DividerWithText from '@/components/shared/DividerWithText'

const MeInMovember = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="Me in Movember" />
      <div className="mt-5">
        <Photo />
      </div>
    </div>
  )
}

export default MeInMovember
