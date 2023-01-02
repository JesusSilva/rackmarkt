interface TitleProps {
  start: string
  strong: string
  end?: string
}

function Title({ start, strong, end }: TitleProps) {
  return (
    <>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
        {start && <span>{start}</span>}{' '}
        {strong && <b className="text-emerald-600">{strong}</b>}{' '}
        {end && <span>{end}</span>}
      </h1>
    </>
  )
}
export default Title
