// require('@tailwindcss/typography')

export default function TextDominios() {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-blue-600 overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-emerald-600 font-semibold tracking-wide uppercase">
              Dominios
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Excepteur eiusmod aute exercitation sit commodo.
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
          </svg>
          <div className="relative bg-blue-600 md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-white lg:max-w-none">
                <p>
                  Es muy importante mantener nuestros activos digitales a buen recaudo, los dominios
                  son la puerta de entrada a nuestro sitio. Es por ello que en Rackmarkt te
                  ofrecemos los mejores precios y herramientas para gestionar tus dominios, tanto si
                  ya los tenias adquiridos como si estas pensando en registrarlo. Disponemos de
                  múltiples extensiones (genéricas, territoriales, especialidades, etc). Una gestión
                  sencilla de los mismos, delegación de nameservers, creación de registros DNS y la
                  posibilidad de adquirir un paquete de hosting asociado a tu dominio para sacarle
                  el mejor partido. El registro se produce de manera automática una vez recibido el
                  pago del mismo, tu dominio estará disponible de manera inmediata.
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-white lg:mt-0">
                <p>
                  Las transferencias tienen un tiempo de procesamiento debido a que tenemos que
                  interactuar con el actual registrador para solicitar su traspaso.
                </p>
                <p>
                  Proteger nuestros nombres de marcas o negocios en múltiples extensiones nos
                  garantiza una futura expansión, los dominios permiten que tu web sea encontrada,
                  fácil de recordar y refuerzan tu presencia en la red.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
