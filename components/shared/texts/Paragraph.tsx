interface ParagraphProps {
  text: string
  color: 'gray' | 'white' | 'blue' | 'green'
}

function Paragraph({ text, color }: ParagraphProps) {
  return (
    <p
      className={`text-base text-${
        color === 'white' ? 'white' : color + '-600'
      } mt-3 md:mt-5 md:text-lg md:mx-auto lg:mx-0`}
    >
      {text}
    </p>
  )
}
export default Paragraph
