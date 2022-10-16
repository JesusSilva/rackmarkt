import { XMarkIcon } from '@heroicons/react/24/outline'

const features = [
  {
    description:
      'Nuestros profesionales se encargarán de las tareas necesarias para que tengas tu VPS Administrado listo desde el primer momento, así como mantenerlo funcionando, actualizado, seguro y puedas despreocuparte de las cuestiones técnicas.',
    icon: XMarkIcon
  },
  {
    description:
      'Utilizamos cPanel como panel de control, por lo que podrás personalizar y configurar lo que necesites de una forma rápida y cómoda.',
    icon: XMarkIcon
  },
  {
    description:
      'En Rackmarkt disponemos de varias configuraciones posibles para que puedas elegir la que más se adapta a tus necesidades y si el día de mañana estas cambian, tu servidor VPS crecerá contigo ya que nuestros planes son totalmente escalables.',
    icon: XMarkIcon
  }
]

export default function Specifications() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 text-center lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          VPS Administrado en España
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500">
          Un VPS Administrado garantiza toda la potencia y flexibilidad de un servidor
          privado sin necesidad de los conocimientos ni el trabajo por tu parte que puede
          requerir una solución de este tipo.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.description} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8 min-h-[232px]">
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
