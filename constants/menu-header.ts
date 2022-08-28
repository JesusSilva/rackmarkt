import {
  AdjustmentsVerticalIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  CubeIcon,
  CurrencyEuroIcon,
  EnvelopeIcon,
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/dominios/registrar',
        icon: GlobeAltIcon
      },
      {
        name: 'Transferir',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/dominios/transferir',
        icon: ArrowsRightLeftIcon
      },
      {
        name: 'Precios',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/dominios/precios-dominios',
        icon: CurrencyEuroIcon
      },
      {
        name: 'SSL',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/hosting/ssd-lite',
        icon: CubeIcon
      },
      {
        name: 'SSD Plus',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/hosting/ssd-plus',
        icon: CubeIcon
      },
      {
        name: 'SSD Reseller',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/hosting/ssd-reseller',
        icon: CubeIcon
      },
      {
        name: 'Correo',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/hosting/correo',
        icon: EnvelopeIcon
      }
    ]
  },
  vps: {
    title: 'VPS',
    href: '/vps',
    popover: true,
    items: [
      {
        name: 'Administrado Lite',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/vps/administrado-lite',
        icon: ServerIcon
      },
      {
        name: 'Administrado Plus',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/vps/administrado-plus',
        icon: ServerIcon
      },
      {
        name: 'Administrado Élite',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/vps/administrado-elite',
        icon: ServerIcon
      },
      {
        name: 'No Administrado',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/vps/no-administrado',
        icon: CpuChipIcon
      },
      {
        name: 'A medida',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/cloud/microsoft-365',
        icon: 'microsoft.png'
      },
      {
        name: 'Google Business',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/cloud/google-business',
        icon: 'google.png'
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
  },
  servicios: {
    title: 'Servicios',
    href: '/servicios',
    popover: true,
    items: [
      {
        name: 'Backup Externo',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/servicios/backup-externo',
        icon: 'backup.svg'
      },
      {
        name: 'VPN',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/servicios/vpn',
        icon: 'vpn.svg'
      },
      {
        name: 'CPanel',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/servicios/cpanel',
        icon: 'cpanel.svg'
      },
      {
        name: 'Plesk',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/servicios/plesk',
        icon: 'plesk.svg'
      },
      {
        name: 'LiteSpeed',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
        href: '/servicios/litespeed',
        icon: 'litespeed.svg'
      }
    ]
  }
}

export default menu
