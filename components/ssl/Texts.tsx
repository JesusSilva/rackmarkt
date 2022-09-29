export default function TextsSSL() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1>
          <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Conozca más acerca de los certificados SSL
          </span>
        </h1>
        <p className="mt-8 text-xl leading-8 text-gray-500">
          SSL es la tecnología de seguridad para establecer un enlace cifrado entre un servidor y un
          cliente. Este enlace asegura que todos los datos transferidos entre el servidor y el
          cliente permanezcan seguros y no puedan ser intervenidos por terceros.
        </p>
        <p className="mt-8 text-xl leading-8 text-gray-500">
          En el caso de un servidor web el protocolo se conoce como https. En la actualidad es
          indispensable servir el contenido web mediante https para garantizar a los visitantes que
          toda la información que introduzcan se transmite de una manera segura.
        </p>
        <p className="mt-8 text-xl leading-8 text-gray-500">
          También se utilizan los certificados SSL para otro tipo de servicios como pueden ser
          servidor de correo, servidor FTP, etc. Garantizando que las conexiones cliente-servidor se
          realizan de manera segura en todo momento.
        </p>
        <p className="mt-8 text-xl leading-8 text-gray-500">
          Existen unas entidades certificadoras que emiten estos certificados y son reconocidos por
          los navegadores como legítimos, esto permite que se verifique que la conexión se está
          realizando al dominio que visitamos realmente.
        </p>
        <p className="mt-8 text-xl leading-8 text-gray-500">
          Hay tres tipos de certificados dependiendo del tipo de validación y tres tipos más
          dependiendo de si es para un solo dominio, varios dominios o varios dominios y
          subdominios, por eso en RackMarkt los hemos clasificado de forma fácil para ti.
        </p>
      </div>
    </div>
  )
}
