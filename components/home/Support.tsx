const supports = [
  {
    name: '¡Todos los días del año!',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/calendario.svg'
  },
  {
    name: 'Soporte via teléfono',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/telefono.svg'
  },
  {
    name: 'Un panel para tus necesidades',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/panel.svg'
  },
  {
    name: 'Apostamos por lo nuestro',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/casa.svg'
  },
  {
    name: 'Pruébalo el tiempo que necesites',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/prueba.svg'
  },
  {
    name: 'Aceptamos tus criticas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: './images/icons/like.svg'
  }
]

export default function Support() {
  return (
    <div className="py-12 pb-40 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-4xl font-extrabold tracking-tight text-gray-700 md:text-5xl lg:text-6xl">
            El soporte que te mereces.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {supports.map((support) => (
              <div key={support.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-16 w-16 mr-4">
                    <img
                      className="h-20 w-20"
                      aria-hidden="true"
                      src={support.icon}
                      alt={support.name}
                    />
                  </div>
                  <p className="ml-24 text-lg leading-6 font-medium text-gray-900">
                    {support.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-24 text-base text-gray-500">
                  {support.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
