interface HeroButtonsProps {
  textButton1: string
  textButton2?: string
  linkButton1: string
  linkButton2?: string
}

function HeroButtons({
  textButton1,
  textButton2,
  linkButton1,
  linkButton2
}: HeroButtonsProps) {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      {textButton1 && linkButton1 && (
        <div className="rounded-md shadow">
          <a
            href={linkButton1}
            className="w-full flex items-center justify-center px-8 py-3 border border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
          >
            {textButton1}
          </a>
        </div>
      )}
      {textButton2 && linkButton2 && (
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href={linkButton2}
            className="w-full flex items-center justify-center px-8 py-3 border border-emerald-100 text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
          >
            {textButton2}
          </a>
        </div>
      )}
    </div>
  )
}
export default HeroButtons
