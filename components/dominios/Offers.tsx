const offers = [
  {
    name: 'DOMINIO + CORREO',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: './images/icons/correo-electronico.svg'
  },
  {
    name: 'DOMINIO + BLOG',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: './images/icons/blog.svg'
  },
  {
    name: 'DOMINIO + TIENDA',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: './images/icons/tienda.svg'
  }
]

export default function Offers() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="./images/sections/offers.jpeg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Registra tu dominio ahora y disfruta de los siguientes packs!
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-emerald-200">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
            malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui,
            amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative p-6 md:px-8">
                <img
                  className="h-10 w-10 mb-4 text-white"
                  aria-hidden="true"
                  src={offer.icon}
                  alt=""
                />
                <h3 className="text-xl font-medium text-gray-900">{offer.name}</h3>
                <p className="mt-4 text-base text-gray-500">{offer.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={offer.href}
                  className="text-base font-medium text-emerald-700 hover:text-emerald-600"
                >
                  Contrata ya!<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
