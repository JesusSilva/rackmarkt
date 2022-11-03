const parragraphs: { text: string; imageSrc: string; imageAlt: string }[] = [
  {
    text: 'Cuando tratamos información sensible, ya sea a nivel personal o a nivel empresarial, el uso de una Red Privada Virtual (VPN) garantiza una capa extra a traves de la cual viajará esa información encriptando todos los datos y ocultando nuestra IP real. De este modo resultará inaccesible por parte de terceros que puedan estar tratando de interceptar nuestra conexión y estaremos evitando posibles ciberataques.',
    imageSrc: '/images/icons/dedicado.svg',
    imageAlt: 'Ilustración servidor.'
  },
  {
    text: 'Además, es la mejor forma de interconectar usuarios remotos en una misma red haciendo que, por ejemplo, tus empleados o las distintas ubicaciones físicas de tu negocio dispongan de un acceso privado interno a la misma red empresarial, permitiendo compartir recursos, información o utilizar aplicaciones y servicios privados. Siempre manteniendo las comunicaciones aseguradas sea cual sea el punto de acceso desde el que se conecten, evitando así al máximo exponer datos confidenciales.',
    imageSrc: '/images/icons/protection.svg',
    imageAlt: 'Ilustración seguridad.'
  }
]

function Description() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-8">
          <h2 className="text-4xl font-bold tracking-tight text-blue-600">
            La seguridad que necesitas para tus comunicaciones más sensibles
          </h2>
          <p className="mt-5 text-xl text-blue-600">
            La seguridad en internet siempre es importante, pero existen situaciones en
            las que el riesgo merece tomar medidas adicionales para asegurarnos de que la
            conexión se realiza de la forma más segura posible.
          </p>
        </div>
        {parragraphs.map((p, i) => (
          <div
            key={p.text}
            className="mx-auto pb-8 max-w-screen-2xl flex justify-between"
          >
            {i === 0 ? (
              <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="flex items-center max-w-6xl md:pr-10">
                  <p className="mt-5 text-xl text-blue-600">{p.text}</p>
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
                <div className="flex items-center max-w-6xl md:pl-10 sm:order-1">
                  <p className="mt-5 text-xl text-blue-600">{p.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Description
