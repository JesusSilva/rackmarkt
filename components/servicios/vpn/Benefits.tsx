function Benefits() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            ¿Cuáles son las ventajas de utilizar una VPN en mi empresa?
          </h2>
          <p className="mt-5 text-xl text-gray-200 mb-10">
            <span className="font-bold text-green-600">Seguridad:</span>
            <br />
            Si un empleado se conecta a nuestra red desde casa, su teléfono móvil o
            cualquier otro lugar podemos implementar políticas de acceso como contraseñas
            o verificación en dos pasos, asegurándonos así que nadie que tenga acceso
            físico a su equipo tenga acceso a la información empresarial. El cifrado de
            las comunicaciones se vuelve especialmente importante cuando es necesario
            conectarse desde un punto de acceso público, como un hotel o un aeropuerto.
            Nos aseguramos así de que nadie en la misma red pueda acceder a la información
            que estamos transmitiendo.
          </p>

          <p className="mt-5 text-xl text-gray-200">
            <span className="font-bold text-green-600">Movilidad:</span>
            <br />
            Con una conexion VPN, un empleado puede acceder a la red empresarial desde
            cualquier lugar en el que cuente con una conexión a Internet. Esto facilita el
            empleo en remoto y permite mantenernos conectados con comerciales, empleados
            que tengan que visitar o atender a clientes y socios, técnicos que tengan que
            desplazarse... manteniendo el acceso a todos los archivos y herramientas como
            si estuvieran en tu misma oficina.
          </p>

          <p className="mt-5 text-xl text-gray-200">
            Con una VPN las distintas sedes y ubicaciones de tu empresa pueden conectarse
            a una misma red y trabajar como una única localización en cuanto a redes e
            intranet.
          </p>

          <p className="mt-5 text-xl text-gray-200">
            Si nos desplazamos a ubicaciones o países donde determinados servicios de
            terceros que utilizamos no están disponibles o están bloqueados por
            restricciones geográficas, el uso de una VPN soluciona ese problema ya que
            estaremos navegando como si estuviéramos conectados desde la ubicación en la
            que tengamos dicha VPN y ni siquiera el ISP o el propietario del punto de
            acceso utilizado tendrán control sobre nuestras conexiones.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
