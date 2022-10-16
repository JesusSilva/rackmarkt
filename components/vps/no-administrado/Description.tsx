import Paragraph from '../../texts/Paragraph'
import Subtitle from '../../texts/Subtitle'

function Description() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Subtitle
          text="Servidores KVM con recursos garantizados"
          color="white"
          type="h2"
        />

        <Paragraph
          text="Tu servidor virtual está en buenas manos, la virtualización que ofrecemos en Rackmarkt dispone de recursos garantizados, virtualización completa de tipo KVM, dispondrás de una máquina virtual completa con kernel y todos los paquetes propios. No se trata de una paravirtualización o el uso de contenedores bajo una misma máquina."
          color="white"
        />

        <Paragraph
          text="Empleamos servidores profesionales utilizando memoria ECC, almacenamiento redundado de alta velocidad, switches profesionales y conexiones de muy baja latencia con múltiples destinos nacionales e internacionales."
          color="white"
        />

        <Paragraph
          text="Direccionamiento IP propio y gestionado por nosotros. Alojados en España y en un centro de datos profesional de categoría Tier3+."
          color="white"
        />
      </div>
    </div>
  )
}
export default Description
