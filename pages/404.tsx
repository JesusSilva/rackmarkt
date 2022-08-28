import { BookmarkIcon, BookOpenIcon, ChevronRightIcon, RssIcon } from '@heroicons/react/24/outline'

const links = [
  {
    title: 'Documentation',
    description: 'Learn how to integrate our tools with your app',
    icon: BookOpenIcon
  },
  {
    title: 'API Reference',
    description: 'A complete API reference for our libraries',
    icon: BookOpenIcon
  },
  {
    title: 'Guides',
    description: 'Installation guides that cover popular setups',
    icon: BookmarkIcon
  },
  { title: 'Blog', description: 'Read our latest news and articles', icon: RssIcon }
]

function Page404() {
  return (
    <div className="bg-white min-h-screen min-w-screen flex flex-col lg:relative">
      <div className="flex-grow flex flex-col lg:w-1/2">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <div className="cursor-pointer">
                <a href="/">
                  <div className="flex items-center">
                    <span className="sr-only">Rackmarkt 404</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/images/logos/rackmarkt_isotipo.png"
                      alt="Logo Rackmarkt"
                    />
                    <span className="text-gray-700 text-4xl tracking-widest font-semibold">
                      RACKMARKT
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Error 404
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
                Página no encontrada
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Lo sentimos, no hemos podido encontrar la página que busca.
              </p>
              <div className="mt-12 max-w-4xl">
                <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                  Páginas principales
                </h2>
                <ul
                  role="list"
                  className="mt-4 border-t border-b border-gray-100/20 divide-y divide-gray-100/20"
                >
                  {links.map((link, linkIdx) => (
                    <li key={linkIdx} className="relative py-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100">
                          <link.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-medium text-gray-900">
                          <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                            <a href="#" className="focus:outline-none">
                              <span className="absolute inset-0" aria-hidden="true" />
                              {link.title}
                            </a>
                          </span>
                        </h3>
                        <p className="text-base text-gray-500">{link.description}</p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="text-base font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Volver al inicio<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 bg-gray-50">
          <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
            <nav className="flex space-x-4">
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Contacto
              </a>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Soporte
              </a>
              <span className="inline-block border-l border-gray-300" aria-hidden="true" />
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Twitter
              </a>
            </nav>
          </div>
        </footer>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/persons/404.jpeg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Page404
