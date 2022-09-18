const features = [
  {
    name: 'Microsoft Teams',
    description: 'Organiza reuniones o videoconferencias a través de Microsoft Teams.',
    icon: '/images/icons/teams.svg'
  },
  {
    name: 'Microsoft Outlook',
    description:
      'Integra tu correo electrónico así como el calendario,citas y tareas en Microsoft Outlook.',
    icon: '/images/icons/outlook.svg'
  },
  {
    name: 'Microsoft Office',
    description:
      'Crea o edita documentos en las versiones más actuales de las aplicaciones de Microsoft Office: Word, Excel, PowerPoint, etc.',
    icon: '/images/icons/office.svg'
  },
  {
    name: 'Microsoft OneDrive',
    description:
      'Almacena y comparte archivos en la nube de forma seguracon OneDrive, manteniéndolos siempre sincronizados.',
    icon: '/images/icons/onedrive.svg'
  }
]

function Apps() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Microsoft 365 para empresas
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Microsoft 365 unifica todas las herramientas que impulsarán la productividad y la
          seguridad de tu empresa a un nuevo nivel. Accesibles desde cualquier dispositivo, siempre
          con las últimas versiones y en un entorno colaborativo, en el que tanto de forma local
          como remota podrás trabajar junto a los miembros de tu equipo en documentos y archivos
          simultáneamente.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 min-h-[272px]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                        <img
                          src={feature.icon}
                          alt={feature.name}
                          className="h-14 w-14 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
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
      </div>
    </div>
  )
}

export default Apps
