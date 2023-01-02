const testimonials = [
  {
    name: 'Naturhouse',
    href: '#',
    description:
      'Nulla tempor labore est incididunt et labore exercitation. Tempor non cillum amet anim deserunt ipsum ex amet dolore aliqua aute mollit consectetur cillum. Nostrud est amet in anim nisi.',
    avatar: './images/brands/naturhouse.png'
  },
  {
    name: 'JFPRO',
    href: '#',
    description:
      'Nulla tempor labore est incididunt et labore exercitation. Tempor non cillum amet anim deserunt ipsum ex amet dolore aliqua aute mollit consectetur cillum. Nostrud est amet in anim nisi.',
    avatar: './images/brands/jfpro.png'
  },
  {
    name: 'Ticksy',
    href: '#',
    description:
      'Nulla tempor labore est incididunt et labore exercitation. Tempor non cillum amet anim deserunt ipsum ex amet dolore aliqua aute mollit consectetur cillum. Nostrud est amet in anim nisi.',
    avatar: './images/brands/ticksy.png'
  }
]

export default function TestimonialsHome() {
  return (
    <div className="bg-white">
      <div className="relative pb-32 bg-gray-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="./images/sections/testimonials.jpeg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-screen-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Testimonios
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-emerald-200">
            Nulla tempor labore est incididunt et labore exercitation. Tempor non cillum
            amet anim deserunt ipsum ex amet dolore aliqua aute mollit consectetur cillum.
            Nostrud est amet in anim nisi.
          </p>
        </div>
      </div>

      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Testimonio
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 inline-block bg-emerald-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <img
                    className="w-20 h-20 object-cover object-center rounded-lg"
                    src={`${testimonial.avatar}`}
                    alt={testimonial.name}
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-700">{testimonial.name}</h3>
                <p className="mt-4 text-base text-gray-500">{testimonial.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={testimonial.href}
                  className="text-base font-medium text-emerald-600 hover:text-emerald-700"
                ></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
