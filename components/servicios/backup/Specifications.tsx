import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Copias incrementales',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'Copias comprimidas',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LockClosedIcon
  },
  {
    name: '100% Autoservicio',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowPathIcon
  },
  {
    name: 'Soporte especializado',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Servidores de respaldo',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CogIcon
  },
  {
    name: 'Database Backups',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon
  }
]

export default function Specifications() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-screen-2xl lg:px-8">
        <h2 className="text-lg font-semibold text-blue-600">Deploy faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-blue-600">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
          quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-blue-600">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
