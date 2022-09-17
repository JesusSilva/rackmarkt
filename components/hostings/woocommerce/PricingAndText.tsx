/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Hosting Lite',
    href: '#',
    priceMonthly: 5,
    description: 'Para pequeños grandes proyectos.',
    features: [
      'Desde 5€/mes',
      '1 Mes gratis contratando anual',
      'De 5 a 30 GB de espacio SSD',
      'Recursos garantizados',
      'Todas las mejoras necesarias para optimizar tu sitio WordPress'
    ]
  },
  {
    name: 'Hosting Plus',
    href: '#',
    priceMonthly: 20,
    description: 'Cuando necesitas un extra de potencia.',
    features: [
      'Desde 20€/mes',
      '2 Mes gratis contratando anual',
      'De 40 a 100 GB de espacio SSD',
      'Aun más recursos para tu sitio web',
      'IP Dedicada',
      'Todas las mejoras necesarias para optimizar tu sitio WordPress'
    ]
  }
]

function PricingAndText() {
  return (
    <div className="bg-blue-600">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
            <h2 className="text-xl font-semibold leading-6 text-gray-300">Precios</h2>
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Como nuestro hosting mejora tu Wordpress
            </p>
            <p className="text-xl text-gray-300">
              La elección de un hosting apropiado para Wordpress es fundamental a la hora de
              conseguir un rendimiento excelente. Podrás contar con todas aquellas tecnologías que
              mejoren la carga de tu sitio web.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-blue-600" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                      {tier.priceMonthly}€
                      <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-4 max-w-screen-2xl px-4 sm:px-6 lg:mt-5 lg:px-8">
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex rounded-full bg-white px-4 py-1 text-base font-semibold text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo projects that make
                  less than $20k gross revenue for{' '}
                  <span className="font-semibold text-gray-900">29€</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Buy Discounted License
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-2xl">
            <p className="mt-5 text-xl text-blue-700">
              Utilización de la última versión de PHP, compresión GZIP del contenido, contenido
              cacheado para una carga instantánea, imágenes optimizadas para cualquier tamaño,
              versiones webp de las mismas, precarga de contenido, minificación de CSS/JS,
              certificado SSL gratuito en todas las webs, etc. Además cuentas con Wordpress Toolkit,
              una herramienta integral desde la que podrás mantener tu instalación de Wordpress, sus
              plugins y sus temas actualizados y seguros sin necesidad de conocimientos técnicos.
            </p>
          </div>
          <div className="mx-auto max-w-screen-2xl">
            <p className="mt-5 text-xl text-blue-700">
              Estamos listos para mostrarte el verdadero rendimiento de tu sitio web y que tus
              visitantes tengan una experiencia ágil visitándote. Recuerda que con la contratación
              de un hosting realizaremos una migración gratuita de tu actual Wordpress a nuestro
              servicio si fuese necesario.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingAndText
