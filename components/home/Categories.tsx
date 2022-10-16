import Paragraph from '../texts/Paragraph'
import Subtitle from '../texts/Subtitle'

const products = [
  {
    id: 1,
    name: 'Dominios',
    href: 'dominios',
    price: 'Desde 9,99€',
    description:
      'Registra tu dominio y protege tu marca. Con cuenta de correo gratis y descuentos por volumen.',
    imageSrc: './images/icons/dominio.svg',
    imageAlt: 'Icono Dominios'
  },
  {
    id: 2,
    name: 'Hosting',
    href: '#',
    price: 'Desde 14,99€',
    description:
      'Te ofrecemos las máximas prestaciones para tu correo, web corporativa o tienda online.',
    imageSrc: './images/icons/hosting.svg',
    imageAlt: 'Icono Hosting.'
  },
  {
    id: 3,
    name: 'VPS',
    href: '#',
    price: 'Desde 34,99€',
    description:
      'Incluyen discos NVMe, que aportan mucha más velocidad. ¡Son hasta 6 veces más rápidos!',
    imageSrc: './images/icons/vps.svg',
    imageAlt: 'Icono VPS.'
  },
  {
    id: 4,
    name: 'Dedicados',
    href: '#',
    price: 'Desde 49,99€',
    description:
      'Gana independencia y disfruta de recursos exclusivos con un servidor Dedicado Intel o Dell.',
    imageSrc: './images/icons/dedicado.svg',
    imageAlt: 'Icono Dedicados.'
  }
  // More products...
]
export default function CategoriesHome() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Subtitle text="Tu web en buenas manos." color="blue" type="h2" />
        <Paragraph
          text="En Rackmarkt te ofrecemos las mejores soluciones para alojar tu proyecto web y registrar tu dominio, así como un equipo especializado de soporte."
          color="gray"
        />

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-100 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="p-5 group-hover:opacity-75 sm:h-50 flex justify-center">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-center object-cover w-40 h-40"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
