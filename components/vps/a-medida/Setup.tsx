import Paragraph from '../../texts/Paragraph'
import Subtitle from '../../texts/Subtitle'
import Select from './Select'

const cpuOptions = [
  { id: 1, name: '1 vCPU' },
  { id: 2, name: '2 vCPU' },
  { id: 4, name: '4 vCPU' },
  { id: 6, name: '6 vCPU' },
  { id: 8, name: '8 vCPU' }
]

const ramOptions = [
  { id: 1, name: '1GB' },
  { id: 2, name: '2GB' },
  { id: 4, name: '4GB' },
  { id: 6, name: '6GB' },
  { id: 8, name: '8GB' },
  { id: 10, name: '10GB' },
  { id: 12, name: '12GB' },
  { id: 14, name: '14GB' },
  { id: 16, name: '16GB' },
  { id: 18, name: '18GB' },
  { id: 20, name: '20GB' },
  { id: 22, name: '22GB' },
  { id: 24, name: '24GB' }
]

const memoryOptions = [
  { id: 1, name: '20GB' },
  { id: 2, name: '40GB' },
  { id: 3, name: '60GB' },
  { id: 4, name: '80GB' },
  { id: 5, name: '100GB' },
  { id: 6, name: '120GB' },
  { id: 7, name: '140GB' },
  { id: 8, name: '160GB' },
  { id: 9, name: '180GB' },
  { id: 10, name: '200GB' },
  { id: 11, name: '220GB' },
  { id: 12, name: '240GB' },
  { id: 13, name: '260GB' },
  { id: 14, name: '280GB' }
]

const administrationOptions = [
  { id: 1, name: 'Sin administración' },
  { id: 2, name: 'Con administración Lite' },
  { id: 3, name: 'Con administración Plus' }
]

const cpanelOptions = [
  { id: 1, name: 'cPanel Admin Cloud - 5 cuentas' },
  { id: 2, name: 'cPanel Pro Cloud - 30 cuentas' },
  { id: 3, name: 'cPanel Plus Cloud - 50 cuentas' },
  { id: 4, name: 'cPanel Premier Cloud - 100 cuentas' },
  { id: 5, name: 'cPanel Premier Cloud - 150 cuentas' }
]

const pleskOptions = [
  { id: 1, name: 'Plesk Web Admin Edition - 10 dominios' },
  { id: 2, name: 'Plesk Web Pro Edition - 30 dominios' },
  { id: 3, name: 'Plesk Web Host Edition - Dominios ilimitados' }
]

const soOptions = [
  { id: 1, name: 'Windows Server 2016 Standard' },
  { id: 2, name: 'Windows Server 2019 Standard' }
]

export default function Setup() {
  return (
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-screen-2xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base lg:max-w-none">
          <Subtitle
            text="VPS a Medida para configuraciones especiales"
            color="blue"
            type="h2"
          />
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose-blue mx-auto text-gray-500 lg:max-w-none">
              <Paragraph
                text="Para proyectos exigentes, es necesario garantizar determinados recursos y no siempre las opciones predefinidas resultan adecuadas. Tal vez necesites gran capacidad de almacenamiento o más memoria RAM de la que puede requerir un simple alojamiento web. En Rackmarkt hemos tenido en cuenta casos como el tuyo y ofrecemos una solución flexible y personalizada en la que tu mismo seleccionarás la configuración óptima, eligiendo tanto el hardware como el software. "
                color="gray"
              />
            </div>

            <div className="prose-blue mx-auto text-gray-500 lg:max-w-none">
              <Paragraph
                text="Sea como sea el servidor que necesita tu proyecto para funcionar con total rendimiento, si puedes imaginarlo nosotros podemos crearlo."
                color="gray"
              />
            </div>
            <div className="mx-auto flex text-base lg:max-w-none pt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                >
                  Contact sales
                </a>
              </div>
              <div className="ml-4 rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-full mx-auto mt-12 text-base lg:mt-0">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative rounded-lg bg-white shadow-lg mt-3 md:mt-5 z-10">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <Select label="CPU" options={cpuOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="RAM" options={ramOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="Memoria" options={memoryOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="Administración" options={administrationOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="cPanel" options={cpanelOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="Plesk" options={pleskOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Select label="Sistema Operativo" options={soOptions} />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Total
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue="100,00 € / mes"
                            disabled
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
