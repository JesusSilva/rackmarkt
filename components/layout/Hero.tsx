import { useRouter } from 'next/router'
import getData from '../../data/data'
import HeroButtons from '../shared/buttons/HeroButtons'
import Paragraph from '../shared/texts/Paragraph'
import Title from '../shared/texts/Title'

interface HeroProps {
  title: {
    start: string
    strong: string
    end: string
  }
  description: string
  image: string
  imageAlt: string
  buttons: { text: string; link: string }[]
}

export default function Hero() {
  const pathname = useRouter().pathname
  const data: HeroProps = getData(pathname, 'hero')

  return (
    <div className="relative bg-white">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-screen-2xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <Title
              start={data.title.start}
              strong={data.title.strong}
              end={data.title.end}
            />
            <Paragraph text={data.description} color="gray" />
            <HeroButtons buttons={data.buttons} />
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={data.image}
            alt={data.imageAlt}
          />
        </div>
      </main>
    </div>
  )
}
