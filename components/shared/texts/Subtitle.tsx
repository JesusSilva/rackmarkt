interface SubtitleProps {
  text: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color: 'gray' | 'white' | 'blue' | 'green'
}

function Subtitle({ text, type, color }: SubtitleProps) {
  // const { t } = useTranslation()

  return (
    <>
      {type === 'h1' && (
        <h1
          className={`text-4xl font-extrabold tracking-tight text-${
            color === 'white' ? 'white' : color + '-600'
          } md:text-5xl lg:text-6xl`}
        >
          {/* { t(text)} */}
          {text}
        </h1>
      )}

      {type === 'h2' && (
        <h2
          className={`text-3xl font-extrabold text-${
            color === 'white' ? 'white' : color + '-600'
          } sm:text-4xl`}
        >
          <span className="block">{text}</span>
        </h2>
      )}
    </>
  )
}
export default Subtitle
