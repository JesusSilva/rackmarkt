const parragraphs: { title: string; text: string; imageSrc: string; imageAlt: string }[] =
  [
    {
      title: 'Ubicado en España',
      text: 'Todos nuestros productos cuentan con IP española en un centro de datos profesional, con hardware propio que te ofrecerá una mayor velocidad de respuesta, mejorando así el posicionamiento SEO y cumpliendo la normativa europea en protección de datos.',
      imageSrc: '/images/icons/dedicado.svg',
      imageAlt: 'Ilustración servidor.'
    },
    {
      title: 'Hardware de última generación',
      text: 'Trabajamos unicamente con servidores profesionales y material de la máxima calidad, implementando siempre las últimas mejoras y componentes disponibles. Por eso en Rackmarkt no creemos en la oferta de servidores dedicados predefinidos con los que terminas contratando un equipo diseñado hace meses que puede haberse quedado obsoleto. Lo diseñamos y montamos especialmente para ti según tus necesidades.',
      imageSrc: '/images/icons/protection.svg',
      imageAlt: 'Ilustración seguridad.'
    },
    {
      title: 'Tráfico ilimitado y alta disponibilidad',
      text: 'Si tu proyecto alcanza a demandar un servidor dedicado, para nosotros significa que también requiere una alta fiabilidad.',
      imageSrc: '/images/icons/dedicado.svg',
      imageAlt: 'Ilustración seguridad.'
    },
    {
      title: 'Configuración personalizada',
      text: 'Ofrecemos una gran flexibilidad en la configuración de tu servidor para que se adapte a lo que necesitas. Elige discos SSD, NVMe, HDD, configuraciones RAID, si necesitas más de una dirección IP, selecciona el sistema operativo...  ¿Necesitas más? Ponnos a prueba, nos gustan los desafíos.',
      imageSrc: '/images/icons/protection.svg',
      imageAlt: 'Ilustración seguridad.'
    },
    {
      title: 'Gestión total o administración.',
      text: 'Dispondrás de acceso total a tu servidor desde el que podrás gestionarlo de forma sencilla, reiniciarlo, monitorizar su estado, revisar logs del sistema e instalar el software que necesites. Pero si lo deseas podemos encargarnos de su administración y mantenimiento para que tu puedas centrarte únicamente en tu negocio.',
      imageSrc: '/images/icons/dedicado.svg',
      imageAlt: 'Ilustración seguridad.'
    }
  ]

function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-8">
          <h2 className="text-4xl font-bold tracking-tight text-blue-600">
            Ventajas de contratar un servidor dedicado con Rackmarkt
          </h2>
        </div>
        {parragraphs.map((p, i) => (
          <div
            key={p.text}
            className="mx-auto pb-8 max-w-screen-2xl flex justify-between"
          >
            {!(i % 2) ? (
              <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="flex flex-col justify-center items-start text-justify max-w-6xl md:pr-10">
                  <p className="text-xl font-semibold text-blue-600">{p.title}</p>
                  <p className="mt-2 text-xl text-blue-600">{p.text}</p>
                </div>
                <div className="w-32 min-w-[10rem] min-h-[10rem] mb-8 lg:mb-0 flex items-center">
                  <img src={p.imageSrc} alt={p.imageAlt} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center md:flex-row">
                <div className="w-32 min-w-[10rem] min-h-[10rem] mb-8 lg:mb-0 flex items-center">
                  <img src={p.imageSrc} alt={p.imageAlt} />
                </div>
                <div className="flex flex-col justify-center items-end text-justify max-w-6xl md:pl-10 sm:order-1">
                  <p className="text-xl font-semibold text-blue-600">{p.title}</p>
                  <p className="mt-2 text-xl text-blue-600">{p.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
