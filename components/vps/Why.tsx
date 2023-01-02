import Paragraph from '../shared/texts/Paragraph'
import Subtitle from '../shared/texts/Subtitle'

export default function WhyVPS() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Subtitle text="¿Por qué contratar un VPS?" color="white" type="h2" />
        <Paragraph
          text="Si los paquetes de hosting no cubren tus necesidades, necesitas hacer configuraciones a medida o simplemente quieres organizar tu servidor al gusto de tu propio equipo de IT. Puedes tener recursos garantizados y disponer de un control total de todos los aspectos del servidor, desde la configuración del sistema operativo, el manejo completo de las configuraciones o la instalación de software adicional que no podría configurar en un alojamiento compartido."
          color="white"
        />
      </div>
    </div>
  )
}
