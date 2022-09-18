import Logos from './Logos'

function Hero() {
  return (
    <div className="relative xl:bg-white overflow-hidden mt-20 sm:mt-[88px]">
      <div className="bg-[url('../public/images/persons/microsoft-365-portrait.jpg')] sm:bg-[url('../public/images/persons/microsoft-365-landscape.jpg')] bg-center bg-blend-screen bg-cover bg-no-repeat bg-gray-700 max-w-screen-2xl mx-auto -md:mx-0 xl:bg-white">
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
              <h1 className="text-4xl tracking-tight font-extrabold text-white xl:text-gray-700 sm:text-5xl md:text-6xl shadow-gray-900">
                Digitaliza tu negocio con <b className="text-emerald-600">Microsoft 365</b>
              </h1>
              <Logos />
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                  >
                    Hostings
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-emerald-100 text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
                  >
                    Servidores
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden xl:block xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
        <img
          className="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover object-center"
          src="/images/persons/microsoft-365-landscape.jpg"
          alt="Imagen de portada"
        />
      </div>
    </div>
  )
}

export default Hero
