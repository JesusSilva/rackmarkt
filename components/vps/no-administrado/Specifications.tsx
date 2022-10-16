import { XMarkIcon } from '@heroicons/react/24/outline'

const features = [
  {
    description:
      'Pueden ser encargados simplemente con un sistema operativo de tu elección, así como con múltiples soluciones de control como pueden ser cPanel, Plesk, etc.',
    icon: XMarkIcon
  },
  {
    description:
      'Tienes total libertad para instalar cualquier software que necesites: desde un servidor vpn, servidores de ficheros, software de streaming, etc.',
    icon: XMarkIcon
  },
  {
    description:
      'Dispondrás de acceso Root o Administrador al servidor desde el cual podrás administrarlo totalmente.',
    icon: XMarkIcon
  }
]

export default function Specifications() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 text-center lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          VPS No Administrado para clientes exigentes
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500">
          Esta gama de servidores VPS está destinada a aquellos usuarios que tienen los
          conocimientos suficientes para administrar por ellos mismos un servidor.
          Simplemente tienes a tu disposición los recursos garantizados que proveen
          nuestros paquetes, tienes libertad para instalar y configurar el software a tu
          antojo.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.description} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8 min-h-[180px]">
                  <div className="-mt-6">
                    <div>
                      <span className="bg-white inline-flex items-center justify-center rounded-md p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
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
