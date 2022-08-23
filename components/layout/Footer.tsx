import { ChevronDownIcon } from '@heroicons/react/solid'

const navigation = {
  servicios: [
    { name: 'Dominios', href: '#' },
    { name: 'Hosting', href: '#' },
    { name: 'VPS', href: '#' },
    { name: 'Cloud', href: '#' },
    { name: 'Dedicados', href: '#' },
    { name: 'Housing', href: '#' }
  ],
  empresa: [
    { name: 'La empresa', href: '#' },
    { name: 'Programa de afiliados', href: '#' },
    { name: 'Aviso legal', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contacto', href: '#' }
  ],
  hosting: [
    { name: 'Hosting Wordpress', href: '#' },
    { name: 'Hosting Magento', href: '#' },
    { name: 'Hosting Prestashop', href: '#' },
    { name: 'Hosting WooCommerce', href: '#' }
  ],
  rackmarkt: [
    { name: 'Infraestructura', href: '#' },
    { name: 'Soporte especializado', href: '#' },
    { name: 'Métodos de pago', href: '#' },
    { name: 'Servicios administrados', href: '#' },
    { name: 'Servicios no administrados', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-700" aria-labelledby="footer-heading">
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
                  {navigation.servicios.map((item) => (
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
                  {navigation.empresa.map((item) => (
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
                  {navigation.hosting.map((item) => (
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
                  {navigation.rackmarkt.map((item) => (
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
                    className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none sm:text-sm"
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
                    className="appearance-none w-full bg-none bg-gray-700 border border-transparent rounded-md block py-2 pl-3 pr-10 text-base text-white focus:outline-none sm:text-sm"
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
              className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none sm:max-w-xs"
              placeholder="Correo electrónico"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-emerald-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none"
              >
                Subscribete
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-emerald-600 hover:text-emerald-600"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-emerald-600 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Rackmarkt. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
