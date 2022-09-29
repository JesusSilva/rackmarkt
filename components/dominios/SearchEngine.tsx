export default function SearchEngine() {
  return (
    <div className="bg-blue-600 py-12" id="registrar">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-2/4 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Registra tu dominio.
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-100">
            Ha llegado el momento de registrar el dominio perfecto para tu web y tu correo.
            ¡Compruebe si está libre!.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-2/4">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Encuentra tu dominio perfecto
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 sm:min-w-xs rounded-md focus:outline-none"
              placeholder="Ej: tudominio.es"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full sm:w-40 flex items-center justify-center px-5 py-3 border border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
