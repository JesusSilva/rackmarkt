import Paragraph from '../../shared/texts/Paragraph'
import Subtitle from '../../shared/texts/Subtitle'

function Description() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Subtitle
          text="Un VPS flexible que se adapta a tu proyecto"
          color="white"
          type="h2"
        />

        <Paragraph
          text="Configura tu VPS a Medida y paga solo por lo que realmente necesitas."
          color="white"
        />

        <Paragraph
          text="En determinados casos, es posible que tras mucho buscar no encuentres el paquete que te ofrezca gran capacidad de procesamiento sin sobredimensionar características que no necesitas. O bien tu proyecto requiere mayor espacio de almacenamiento pero no por ello estás dispuesto a pagar por memoria RAM extra que no vas a utilizar."
          color="white"
        />

        <Paragraph
          text="Con Rackmarkt ahora puedes configurar el servidor ajustado a tus necesidades reales."
          color="white"
        />
      </div>
    </div>
  )
}
export default Description
