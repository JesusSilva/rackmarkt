import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Configuraciones de cPanel',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.'
  },
  {
    name: 'Cron Jobs',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.'
  },
  {
    name: 'Directorios Home de tus cuentas',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.'
  },
  {
    name: 'Zonas DNS',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.'
  },
  {
    name: 'Certificados SSL',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.'
  },
  {
    name: 'Bases de datos y sus usuarios',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.'
  },
  {
    name: 'Cuentas de correo y su contenido',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.'
  },
  {
    name: 'Cuentas FTP',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.'
  }
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            En nuestros servidores de Backup podrás almacenar tus copias de seguridad de
            forma totalmente personalizada
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-blue-600">
            Elige en todo momento lo que quieres incluir en tus copias de seguridad:
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
