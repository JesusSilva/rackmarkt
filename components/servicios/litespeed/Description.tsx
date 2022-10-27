export default function Description() {
  return (
    <div className="overflow-hidden bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              LiteSpeed Web Server
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
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
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
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
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-gray-100 md:p-6">
            <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
              <p>
                Detrás de cualquier alojamiento web o hosting se encuentran varias capas
                de software que juntas hacen posible el funcionamiento de todas sus
                funciones, desde el propio sitio web hasta el correo electrónico o las
                herramientas encargadas de la seguridad y rendimiento del servicio.
              </p>
              <p>
                Todas son indispensables, pero es el servidor web el ecargado de que tu
                sitio sea acesible para tus visitantes a través del navegador y su
                elección es un elemento clave para hacer que su experiencia sea la mejor
                posible.
              </p>
              <p>
                En Rackmarkt apostamos por LiteSpeed: un servidor web rápido, moderno y
                fiable que se ha convertido en uno de los preferidos entre los
                profesionales debido a su rendimiento y a que implementa todas las mejoras
                que podríamos echar en falta en otros servidores populares.
              </p>
              <p>
                LiteSpeed es totalmente compatible con tecnologías como .htaccess,
                mod_security o mod_rewrite, por lo que la migración desde Apache es
                posible de una forma sencilla si ya tienes un sitio web funcionando sobre
                este y buscas migrar a un servidor web más moderno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
