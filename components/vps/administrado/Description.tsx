import Paragraph from '../../texts/Paragraph'
import Subtitle from '../../texts/Subtitle'

function Description() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Subtitle
          text="La combinación perfecta entre hardware, servicio y soporte"
          color="white"
          type="h2"
        />

        <Paragraph
          text="Contar con un VPS Administrado es la opción ideal para aquellos que no tienen experiencia administrando un servidor o bien prefieren dedicar más tiempo a gestionar sus páginas web y confiar a su proveedor el resto de tareas. Tendrás la tranquilidad de saber que dejas la parte técnica en manos de un equipo de soporte especializado que se encargará de:"
          color="white"
        />

        <Paragraph
          text="(¿Tabla de servicios que incluye el administrado?)"
          color="white"
        />
      </div>
    </div>
  )
}
export default Description
