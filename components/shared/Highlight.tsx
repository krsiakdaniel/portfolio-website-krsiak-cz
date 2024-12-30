type HighlightProps = {
  text: string
}

const Highlight = ({ text }: HighlightProps): JSX.Element => {
  return <span className="font-bold text-violet-600">{text}</span>
}

export default Highlight
