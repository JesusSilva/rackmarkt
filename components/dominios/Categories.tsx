const products = [
  {
    id: 1,
    name: 'Registrar',
    href: '#',
    price: 'Desde 9,99€',
    description: 'Magna ut deserunt anim labore ut irure mollit ad ad irure non nostrud amet.',
    imageSrc: './images/icons/registrar-dominios.svg',
    imageAlt: 'Icono Registrar.'
  },
  {
    id: 2,
    name: 'Transferir',
    href: '#',
    price: 'Desde 14,99€',
    description: 'Consequat tempor mollit commodo non eiusmod do dolor.',
    imageSrc: './images/icons/transferir-dominio.svg',
    imageAlt: 'Icono Transferir.'
  },
  {
    id: 3,
    name: 'Precios',
    href: '#',
    price: 'Desde 34,99€',
    description: 'Qui ipsum do enim aute commodo ad duis sint.',
    imageSrc: './images/icons/precios.svg',
    imageAlt: 'Icono Precios.'
  },
  {
    id: 4,
    name: 'SSL',
    href: '#',
    price: 'Desde 49,99€',
    description:
      'Anim magna ex veniam duis ipsum laborum aliquip do tempor culpa ut eu cupidatat mollit.',
    imageSrc: './images/icons/certificado.svg',
    imageAlt: 'Icono SSL.'
  }
]
export default function CategoriesDominios() {
  return (
    <div className="bg-white py-12" id="precios-dominios">
      <div className="max-w-screen-2xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
          <span className="block">Algunos de nuestros servicios son...</span>
        </h2>
        <p className="mt-5 mb-8 text-lg leading-6 text-gray-500">
          En Rackmarkt te ofrecemos las mejores soluciones para alojar tu proyecto web y registrar
          tu dominio, así como un equipo especializado de soporte.
        </p>

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
