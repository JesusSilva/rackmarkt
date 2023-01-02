import {
  AdjustmentsVerticalIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  CubeIcon,
  CurrencyEuroIcon,
  GlobeAltIcon,
  KeyIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

const menu = {
  dominios: {
    title: 'Dominios',
    href: '/dominios',
    popover: true,
    items: [
      {
        name: 'Registrar',
        description:
          'Comprueba si tu dominio está libre y regístralo al mejor precio. Nos encargamos de todo, ¡Nunca ha sido tan fácil empezar!',
        href: '/dominios/#registrar',
        icon: GlobeAltIcon
      },
      {
        name: 'Transferir',
        description:
          'Transfiere tu dominio. Con multitud de funciones y el mejor soporte para que no te preocupes por nada.',
        href: '/dominios/#transferir',
        icon: ArrowsRightLeftIcon
      },
      {
        name: 'Precios',
        description:
          'Conoce los cientos de extensiones disponibles y encuentra la combinación perfecta para tu proyecto.',
        href: '/dominios/#precios-dominios',
        icon: CurrencyEuroIcon
      },
      {
        name: 'SSL',
        description:
          'Ofrece la máxima protección y gánate la confianza de tus visitantes haciendo que tu web sea un sitio seguro.',
        href: '/dominios/ssl',
        icon: KeyIcon
      }
    ]
  },
  hosting: {
    title: 'Hosting',
    href: '/hosting',
    popover: true,
    items: [
      {
        name: 'SSD Lite',
        description:
          'Alojamiento con la mejor relación calidad-precio, sin renunciar a prestaciones y con el soporte que necesitas.',
        href: '/hosting/ssd-lite',
        icon: CubeIcon
      },
      {
        name: 'SSD Plus',
        description:
          'Alto rendimiento con más recursos garantizados y el mejor servicio. ¡Haz que tu web vuele con Rackmarkt!',
        href: '/hosting/ssd-plus',
        icon: CubeIcon
      },
      {
        name: 'SSD Reseller',
        description:
          'Proporciona a tus clientes la calidad y fiablididad que te caracterizan, también en su alojamiento web.',
        href: '/hosting/ssd-reseller',
        icon: CubeIcon
      }
    ]
  },
  vps: {
    title: 'VPS',
    href: '/vps',
    popover: true,
    items: [
      {
        name: 'Administrado',
        description:
          'Servidores VPS con cPanel preparados para que tu web rinda al máximo. El mantenimiento es cosa nuestra.',
        href: '/vps/administrado',
        icon: ServerIcon
      },
      {
        name: 'No Administrado',
        description:
          'Acceso root a tu entorno privado, con recursos garantizados y la última tecnología a tu disposición.',
        href: '/vps/no-administrado',
        icon: CpuChipIcon
      },
      {
        name: 'A Medida',
        description:
          'Configura un servidor acorde a las necesidades de tu proyecto, te ofrecemos exactamente lo que necesitas.',
        href: '/vps/a-medida',
        icon: AdjustmentsVerticalIcon
      }
    ]
  },
  cloud: {
    title: 'Cloud',
    href: '/cloud',
    popover: true,
    items: [
      {
        name: 'Microsoft 365',
        description:
          'La nube inteligente de Microsoft que te ayuda a digitalizar tu negocio y comunicarte con tu equipo.',
        href: '/cloud/microsoft-365',
        icon: 'microsoft.png'
      },
      {
        name: 'Google Business',
        description:
          'La suite de aplicaciones de Google para optimizar la productividad, colaboración y seguridad en tu empresa.',
        href: '/cloud/google-business',
        icon: 'google.png'
      }
    ]
  },
  servicios: {
    title: 'Servicios',
    href: '/servicios',
    popover: true,
    items: [
      {
        name: 'Backup Externo',
        description:
          'Manten a salvo tu servidor y tus proyectos con Jetbackup, la mejor herramienta de backup para cPanel.',
        href: '/servicios/backup-externo',
        icon: 'backup.svg'
      },
      {
        name: 'VPN',
        description:
          'Navega de forma anónima y segura o crea una red privada para tus trabajadores en remoto.',
        href: '/servicios/vpn',
        icon: 'vpn.svg'
      },
      {
        name: 'CPanel',
        description:
          'El panel de control para administrar servidores de alojamiento con automatización e interfaz gráfica web.',
        href: '/servicios/cpanel',
        icon: 'cpanel.svg'
      },
      {
        name: 'Plesk',
        description:
          'El software de automatización de centros de datos y alojamiento basados en Linux y Windows.',
        href: '/servicios/plesk',
        icon: 'plesk.svg'
      },
      {
        name: 'LiteSpeed',
        description:
          'Descubre el servidor web que hará que tu sitio web sea más rápido y eficiente.',
        href: '/servicios/litespeed',
        icon: 'litespeed.svg'
      }
    ]
  },
  dedicados: {
    title: 'Dedicados',
    href: '/servidores-dedicados',
    popover: false,
    items: []
  },
  housing: {
    title: 'Housing',
    href: '/housing',
    popover: false,
    items: []
  }
}

export default menu
