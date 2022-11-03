import HeroButtons from '../../buttons/HeroButtons'
import Paragraph from '../../texts/Paragraph'
import Title from '../../texts/Title'

function Hero() {
  return (
    <div className="relative xl:bg-white overflow-hidden mt-20 sm:mt-[88px]">
      <div className="bg-[url('../public/images/persons/vpn-portrait.jpeg')] sm:bg-[url('../public/images/persons/vpn-landscape.jpeg')] bg-center bg-blend-screen bg-cover bg-no-repeat bg-gray-700 max-w-screen-2xl mx-auto -md:mx-0 xl:bg-white">
        <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:max-w-screen-md lg:w-full lg:py-28 xl:py-32 h-full xl:bg-white">
          <svg
            className="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="py-10 mx-auto px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28">
            <div className="sm:text-center lg:text-left">
              <Title
                start=""
                strong="Servidores VPN:"
                end="Mantente conectado sin que la privacidad sea una preocupación"
              />
              <Paragraph
                text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                color="gray"
              />
              <HeroButtons
                textButton1="Hosting"
                linkButton1="#"
                textButton2="Servidores"
                linkButton2="#"
              />
            </div>
          </main>
        </div>
      </div>
      <div className="hidden xl:block xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
        <img
          className="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover object-left"
          src="/images/persons/vpn-landscape.jpeg"
          alt="Imagen de portada"
        />
      </div>
    </div>
  )
}
export default Hero
