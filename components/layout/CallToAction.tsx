export default function CallToAction() {
  return (
    <div className="relative bg-gray-700">
      <div className="h-56 bg-emerald-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/images/persons/customer-service.jpeg"
          alt="Atencion al cliente"
        />
      </div>
      <div className="relative max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 md:py-28">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Soporte premiado
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Estamos para ayudarte
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Contactenos y te llamamos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
