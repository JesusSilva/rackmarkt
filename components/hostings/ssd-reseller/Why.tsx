/* This example requires Tailwind CSS v2.0+ */
import {
  CubeIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Todo en uno',
    description:
      'En RackMarkt te ofrecemos todo lo necesario para tener un negocio online de éxito ofreciendo las mejores soluciones tecnológicas del mercado junto al software para sacarle el mayor provecho a nuestros potentes servidores.',
    icon: RectangleGroupIcon
  },
  {
    name: 'Personalización',
    description:
      'Ideal para agencias de diseño que quieren ofrecer un producto de calidad a sus clientes sin la menor preocupación, pudiendo gestionar los alojamientos con usuarios independientes y de manera segura.',
    icon: SwatchIcon
  },
  {
    name: 'Soporte especializado',
    description:
      'Además de la tecnología, ofrecemos soporte de la mayor calidad gracias a los años de experiencia de RackMarkt en el sector ofreciendo sus servicios a grandes empresas.',
    icon: LifebuoyIcon
  }
]

function Why() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            ¿Por qué elegir un paquete de Hosting Reseller en RackMarkt?
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
            Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Why
