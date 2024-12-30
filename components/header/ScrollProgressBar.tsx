type ScrollProgressBarProps = {
  scroll: number
}

const ScrollProgressBar = ({ scroll }: ScrollProgressBarProps): JSX.Element => {
  return <div className="absolute bottom-0 left-0 h-1 bg-violet-600" style={{ width: `${scroll}%` }}></div>
}

export default ScrollProgressBar
