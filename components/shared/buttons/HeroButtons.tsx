import classNames from '../../../utils/ClassNames'

interface HeroButtonsProps {
  buttons: { text: string; link: string }[]
}

function HeroButtons({ buttons }: HeroButtonsProps) {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-8">
      {buttons.map((button, index) => (
        <div key={button.text} className="rounded-md shadow mb-4">
          <a
            href={button.link}
            className={classNames(
              index === 0
                ? 'bg-emerald-600 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 text-white'
                : 'bg-emerald-100 border-emerald-100 hover:bg-emerald-200 hover:border-green-100 text-emerald-700',
              'w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10'
            )}
          >
            {button.text}
          </a>
        </div>
      ))}
    </div>
  )
}
export default HeroButtons
