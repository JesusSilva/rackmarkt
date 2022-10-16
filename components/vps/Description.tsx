import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'
import classNames from '../../utils/ClassNames'
import Paragraph from '../texts/Paragraph'
import Subtitle from '../texts/Subtitle'

const features = [
  {
    name: '',
    description:
      'Para aquellos que buscan algo más que un alojamiento web, para los que necesitan configuraciones a medida, instalación de módulos o librerías específicas y una mayor flexibilidad y seguridad, tenemos nuestros planes de servidores VPS con SSD.',
    icon: CloudArrowUpIcon
  },
  {
    name: '',
    description:
      'No compartirás tus recursos con nadie, puedes realizar cambios y configuraciones a nivel de sistema operativo que un alojamiento compartido convencional no permite. Por ello, disponemos de una gama de servidores VPS enfocados al alto rendimiento con los recursos garantizados.',
    icon: LockClosedIcon
  },
  {
    name: '',
    description:
      'Si tus necesidades crecen, tu VPS también puede hacerlo. Sin tener que migrar de plataforma o traspasar datos, de manera transparente.',
    icon: ArrowPathIcon
  }
]

const services = {
  tiers: [
    {
      title: 'VPS No Administrado',
      price: 24,
      frequency: '/month',
      description:
        'Para aquellos que saben lo que quieren y lo que hacen, y que simplemente buscan disponer de los recursos y realizar sus propias configuraciones',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time'
      ],
      cta: 'Mas info...',
      mostPopular: false
    },
    {
      title: 'VPS Administrado',
      price: 32,
      frequency: '/month',
      description:
        'Nuestros paquetes administrados llevan cPanel como panel de control, recibiras un vps con todo lo necesario para empezar.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations'
      ],
      cta: 'Mas info...',
      mostPopular: true
    },
    {
      title: 'VPS a Medida',
      price: 48,
      frequency: '/month',
      description:
        'VPS totalmente a medida, con las características que necesites. Tu decides que recursos necesitas y que software quieres instalar.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations'
      ],
      cta: 'Mas info...',
      mostPopular: false
    }
  ]
}

export default function DescriptionVPS() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <Subtitle
          text="Servidores Virtuales Privados con SSD en España"
          type="h2"
          color="blue"
        />
        <Paragraph
          color="blue"
          text="Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
          quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
        ></Paragraph>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white p-6 min-h-[280px]">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Paragraph
            text="Hemos dividido nuestra oferta VPS en varios tipos para adaptarnos a las necesidades de cada cliente:"
            color="blue"
          />

          {/* Tiers */}
          <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {services.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-600 py-1.5 px-4 text-sm font-semibold text-blue-600">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="mr-2 text-xl font-semibold">Desde</span>
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.price}€
                    </span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 text-indigo-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
