import { ChevronDownIcon } from '@heroicons/react/24/outline'
import MenuFooter from '../../constants/menu-footer'

export default function Footer() {
  return (
    <footer className="bg-blue-600" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                  SERVICIOS
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {MenuFooter.servicios.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-100 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                  EMPRESA
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {MenuFooter.empresa.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-100 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                  HOSTING CMS
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {MenuFooter.hosting.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-100 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                  ¿POR QUÉ RACKMARKT?
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {MenuFooter.rackmarkt.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-100 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
              IDIOMA &amp; MONEDA
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  IDIOMA
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="appearance-none block w-full bg-none bg-blue-600 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none sm:text-sm"
                    defaultValue="Spanish"
                  >
                    <option>Spanish</option>
                    <option>English</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-4 w-full">
                <label htmlFor="currency" className="sr-only">
                  MONEDA
                </label>
                <div className="mt-1.5 relative">
                  <select
                    id="currency"
                    name="currency"
                    className="appearance-none w-full bg-none bg-blue-600 border border-transparent rounded-md block py-2 pl-3 pr-10 text-base text-white focus:outline-none sm:text-sm"
                    defaultValue="AUD"
                  >
                    <option>EUR</option>
                    <option>USD</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="border-t border-white-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div className="sm:w-2/4">
            <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
              Subscribete a nuestra newsletter
            </h3>
            <p className="mt-2 text-base text-gray-100">
              Las últimas noticias, artículos y recursos, enviados a su bandeja de entrada
              semanalmente.
            </p>
          </div>
          <form className="mt-4 sm:w-2/4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-blue-500 focus:outline-none sm:max-w-xs"
              placeholder="Correo electrónico"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-emerald-600 border border-emerald-600 rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none"
              >
                Subscribete
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}
