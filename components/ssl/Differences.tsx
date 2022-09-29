const differences = [
  {
    title: 'DV',
    name: 'Domain Validation',
    descriptions: [
      'Son certificados SSL que se emiten verificando que el dominio que protegen pertenece a quien solicitó el certificado.',
      'Dentro de los certificados DV, podemos optar por asegurar 1 dominio solamente (Certificado simple), certificar varios dominios bajo un mismo certificado (Certificado Multi-Dominio), certificar 1 dominio y cualquier subdominio del mismo (Certificado Wildcard).'
    ]
  },
  {
    title: 'OV',
    name: 'Organization Validation',
    descriptions: [
      'Este certificado además de verificar la posesión del dominio, verifica que se han hecho unas comprobaciones sobre quién está detrás del certificado.',
      'Estos certificados no se emiten inmediatamente, ya que requieren varios pasos de certificación adicionales y pueden tardar entre 3-5 días.'
    ]
  },
  {
    title: 'EV',
    name: 'Extended Validation',
    descriptions: [
      'Este tipo de certificado realiza una verificación completa de la entidad, teniendo que firmar contratos, demostrar la existencia de la organización, verificación física de la dirección, verificación telefónica, etc.',
      'Este tipo de certificados puede llevar entre 7 y 15 días para poder emitirlos.',
      'Su coste es mayor pero refleja una validación y autenticidad total tanto en la conexión como sobre la entidad que está detrás.'
    ]
  }
]

export default function DifferencesSSL() {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:px-8">
        <section className="relative" aria-labelledby="Differences">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl mb-8">
            Tipos de SSL y sus diferencias
          </h2>
          <p className="mb-8 text-xl leading-8 text-gray-500">
            Existen varias entidades certificadoras SSL que ofrecen distintos tipos de certificados
            en función de las necesidades del cliente.
          </p>

          <div className="space-y-12 lg:grid lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {differences.map((diff) => (
              <div
                key={diff.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{`${diff.title} (${diff.name})`}</h3>
                  {diff.descriptions.map((description) => (
                    <p className="mt-6 text-gray-500" key={description}>
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="my-8 text-xl leading-8 text-gray-500">
            A efectos de cifrado, todos los tipos de certificado tienen la misma protección. La
            diferencia es el nivel de verificación sobre quien adquiere el certificado.
          </p>
        </section>
      </div>
    </div>
  )
}
