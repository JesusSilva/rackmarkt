export default function Description() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl mr-24">
          <span className="block">Backup rápido y seguro</span>
          <span className="block text-blue-600">
            en servidores externos especializados.
          </span>
          <p className="mt-4 text-lg leading-6 text-gray-500 font-normal">
            Si deseas reservar el almacenamiento de tu servidor cPanel exclusivamente para
            tus proyectos, puedes alojar en un servidor externo las copias de seguridad de
            tus cuentas, ficheros, bases de datos y cuentas de correo.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 shadow hover:bg-blue-50"
          >
            Ver planes
          </a>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <img
            className="object-cover max-w-md"
            src="../images/brands/jetbackup.svg"
            alt="JetBackup"
          />
        </div>
      </div>
    </div>
  )
}
