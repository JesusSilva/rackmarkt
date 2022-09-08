const parragraphs: { text: string; imageSrc: string; imageAlt: string }[] = [
  {
    text: 'Destinado a proyectos con poco volumen de tráfico, con precios muy competitivos, con toda la confianza que aporta alojar tu web en un hosting de calidad con todas las características Premium de planes superiores, como el uso de LiteSpeed como servidor web, con LSCache activo y certificados SSL gratuitos certificados por COMODO.',
    imageSrc: '/images/icons/dedicado.svg',
    imageAlt: 'Ilustración servidor.'
  },
  {
    text: 'Con mecanismos de seguridad para evitar ataques gracias al uso de WAF con reglas actualizadas diariamente, protegiendo tus servicios de atacantes malintencionados.',
    imageSrc: '/images/icons/protection.svg',
    imageAlt: 'Ilustración seguridad.'
  }
]

function Description() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl pt-24 px-4 sm:px-6 lg:px-8 flex">
        <div className="pr-32 flex items-center max-w-6xl">
          <p>{parragraphs[0].text}</p>
        </div>
        <div className="w-[20rem]">
          <img src={parragraphs[0].imageSrc} alt={parragraphs[0].imageAlt} />
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl pb-24 px-4 sm:px-6 lg:px-8 flex">
        <div className="w-[20rem]">
          <img src={parragraphs[1].imageSrc} alt={parragraphs[1].imageAlt} />
        </div>
        <div className="pl-32 flex items-center max-w-6xl">
          <p>{parragraphs[1].text}</p>
        </div>
      </div>
    </div>
  )
}

export default Description
