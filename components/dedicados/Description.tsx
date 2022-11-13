export default function Description() {
  return (
    <div className="overflow-hidden bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué necesito un servidor dedicado?
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
                Empezar a alojar tu proyecto en un servidor dedicado es un paso necesario
                si está en crecimiento constante, necesita cada vez más recursos,
                despliegue de software muy específico o requisitos en cuanto al control y
                selección total del hardware.
              </p>
              <p>
                También se vuelve muy importante cuando tu proyecto por su naturaleza
                tiene mayores necesidades en cuanto a seguridad debido al tipo de
                información que trata o si está orientado a transacciones económicas,
                inversiones y apuestas, por poner algunos ejemplos donde tus necesidades
                de control sobre la privacidad son un elemento clave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
