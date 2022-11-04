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

export default function ASD() {
  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-screen-2xl">
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
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-blue text-gray-500 lg:max-w-none border border-blue-600 rounded-lg	 mb-10 p-6 md:m-6 md:mb-10 lg:mb-0">
                <div className="max-w-prose text-base lg:max-w-none">
                  <h2 className="font-semibold leading-6 text-blue-600 mt-0">Modular</h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Elige en todo momento lo que quieres incluir en tus copias de
                    seguridad:
                  </p>
                </div>
                <ul role="list">
                  <li>Configuraciones de cPanel</li>
                  <li>Cron Jobs</li>
                  <li>Directorios Home de tus cuentas</li>
                  <li>Zonas DNS</li>
                  <li>Certificados SSL</li>
                  <li>Bases de datos y sus usuarios</li>
                  <li>Cuentas de correo y su contenido</li>
                  <li>Cuentas FTP</li>
                  <li>
                    Además, copia o excluye a tu elección cualquier cuenta, directorio o
                    archivo que tengas en tu servidor.
                  </li>
                </ul>
              </div>
              <div className="prose prose-lg prose-blue text-gray-500 md:m-6">
                <p className="font-bold">
                  Además de todas las funciones avanzadas de las que dispone Jetbackup :
                </p>
                <ul role="list">
                  <li>Copias cifradas para proteger aún más tu información.</li>
                  <li>
                    Restauración fichero a fichero para reparaciones en el momento si algo
                    sale mal.
                  </li>
                  <li>
                    Integración con Imunify360 para restaurar automáticamente ficheros
                    comprometidos ante una alerta de seguridad .
                  </li>
                  <li>
                    Configura acciones en cascada personalizadas para que se ejecuten
                    automáticamente antes o después de una tarea programada en Jetbackup
                    (descargar un backup cuando termine de realizarse, programar una copia
                    para cuando otra finalice, generar notificaciones tras una tarea...)
                  </li>
                  <li>
                    Configura avisos a tus dispositivos para conocer el estado de tus
                    backup sin acceder al servidor.
                  </li>
                </ul>
                <p>
                  Y mucho más usando la herramienta de copia de seguridad líder para
                  cPanel. De la forma más completa, rápida y eficiente teniendo tus backup
                  siempre disponibles.
                </p>
              </div>
            </div>
            <div className="relative py-16 sm:py-24 lg:py-32">
              <div className="mx-auto px-4 text-center sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                              <feature.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-blue-600">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
