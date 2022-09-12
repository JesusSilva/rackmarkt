const parragraphs: { text: string; imageSrc: string; imageAlt: string }[] = [
  {
    text: 'Destinado a proyectos con poco volumen de tráfico, con precios muy competitivos, con toda la confianza que aporta alojar tu web en un hosting de calidad con todas las características Premium de planes superiores, como el uso de LiteSpeed como servidor web, con LSCache activo y certificados SSL gratuitos certificados por COMODO. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus doloremque soluta voluptates sequi iure, numquam provident blanditiis labore suscipit hic quo veniam? Reiciendis aut error accusamus quibusdam quaerat voluptate magnam.',
    imageSrc: '/images/icons/dedicado.svg',
    imageAlt: 'Ilustración servidor.'
  },
  {
    text: 'Con mecanismos de seguridad para evitar ataques gracias al uso de WAF con reglas actualizadas diariamente, protegiendo tus servicios de atacantes malintencionados. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus doloremque soluta voluptates sequi iure, numquam provident blanditiis labore suscipit hic quo veniam? Reiciendis aut error accusamus quibusdam quaerat voluptate magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus doloremque soluta voluptates sequi iure, numquam provident blanditiis labore suscipit hic quo veniam? Reiciendis aut error accusamus quibusdam quaerat voluptate magnam.',
    imageSrc: '/images/icons/protection.svg',
    imageAlt: 'Ilustración seguridad.'
  }
]

function Description() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="flex items-center max-w-6xl lg:pr-10">
          <p>{parragraphs[0].text}</p>
          <p></p>
        </div>
        <div className="w-32 min-w-[10rem] min-h-[10rem] mb-8 lg:mb-0 flex items-center">
          <img src={parragraphs[0].imageSrc} alt={parragraphs[0].imageAlt} />
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl pb-24 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-32 min-w-[10rem] min-h-[10rem] mb-8 lg:mb-0 flex items-center">
          <img src={parragraphs[1].imageSrc} alt={parragraphs[1].imageAlt} />
        </div>
        <div className="flex items-center max-w-6xl lg:pl-10">
          <p>{parragraphs[1].text}</p>
        </div>
      </div>
    </div>
  )
}

export default Description
