/* eslint-disable indent */
import { Fragment, useState } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  AdjustmentsIcon,
  ChipIcon,
  CubeTransparentIcon,
  CurrencyEuroIcon,
  GlobeAltIcon,
  KeyIcon,
  MailIcon,
  MenuIcon,
  ServerIcon,
  SwitchHorizontalIcon,
  XIcon,
  ChevronDownIcon,
  PhoneIcon,
  ChatIcon
} from '@heroicons/react/outline'

const dominios = [
  {
    name: 'Registrar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: GlobeAltIcon
  },
  {
    name: 'Transferir',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: SwitchHorizontalIcon
  },
  {
    name: 'Precios',
    nameMobile: 'Precios Dominios',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: CurrencyEuroIcon
  },
  {
    name: 'SSL',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: KeyIcon
  }
]

const hosting = [
  {
    name: 'SSD Lite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: CubeTransparentIcon
  },
  {
    name: 'SSD Plus',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: CubeTransparentIcon
  },
  {
    name: 'SSD Reseller',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: CubeTransparentIcon
  },
  {
    name: 'Correo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: MailIcon
  }
]

const vps = [
  {
    name: 'Administrado Lite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: ServerIcon
  },
  {
    name: 'Administrado Plus',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: ServerIcon
  },
  {
    name: 'Administrado Élite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: ServerIcon
  },
  {
    name: 'No Administrado',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: ChipIcon
  },
  {
    name: 'A medida',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: AdjustmentsIcon
  }
]

const cloud = [
  {
    name: 'Microsoft 365',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'microsoft.png'
  },
  {
    name: 'Google Business',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'google.png'
  }
]

const servicios = [
  {
    name: 'Backup Externo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'backup.svg'
  },
  {
    name: 'VPN',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'vpn.svg'
  },
  {
    name: 'CPanel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'cpanel.svg'
  },
  {
    name: 'Plesk',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'plesk.svg'
  },
  {
    name: 'LiteSpeed',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi voluptate provident quod, autem officia dolorem similique, tempora fuga quisquam esse, reiciendis corporis suscipit optio deleniti molestiae sunt! Eius, eligendi?',
    href: '#',
    icon: 'litespeed.svg'
  }
]

const menuResponsive = [
  { name: 'Dominios', arr: dominios },
  { name: 'Hosting', arr: hosting },
  { name: 'VPS', arr: vps },
  { name: 'Cloud', arr: cloud },
  { name: 'Servicios', arr: servicios }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderFullWidth() {
  const [menuResponsiveOpen, setMenuResponsiveOpen] = useState(false)

  return (
    <Popover
      className={classNames(
        menuResponsiveOpen ? 'h-full min-h-screen' : '',
        'fixed z-40 bg-gray-700 top-0 w-full'
      )}
    >
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:space-x-10">
          <div className="cursor-pointer">
            <a href="/">
              <div className="flex items-center">
                <span className="sr-only">Rackmarkt</span>
                <img
                  className="h-8 w-auto sm:h-10 mr-3"
                  src="/images/logos/rackmarkt_isotipo.png"
                  alt="Logo Rackmarkt"
                />
                <span className="text-white text-4xl tracking-widest font-semibold">
                  RACKMARKT
                </span>
              </div>
            </a>
          </div>
          <div
            className="-mr-2 -my-2 xl:hidden"
            onClick={() => setMenuResponsiveOpen(!menuResponsiveOpen)}
          >
            <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-emerald-700 hover:border-emerald-700 focus:outline-none">
              <span className="sr-only">Abrir menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden xl:flex-1 xl:flex xl:items-center xl:justify-between">
            <Popover.Group as="nav" className="flex space-x-4">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-emerald-600' : 'text-white',
                        'group rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:outline-none'
                      )}
                    >
                      <span className="uppercase">Dominios y SSL</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-gray-700">
                        <div className="max-w-screen-2xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {dominios.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-emerald-600' : 'text-white',
                        'group rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:outline-none'
                      )}
                    >
                      <span className="uppercase">Hosting</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-gray-700">
                        <div className="max-w-screen-2xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {hosting.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-emerald-600' : 'text-white',
                        'group rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:outline-none'
                      )}
                    >
                      <span className="uppercase">VPS</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-gray-700">
                        <div className="max-w-screen-2xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-5 lg:px-8 lg:py-12 xl:py-16">
                          {vps.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-emerald-600' : 'text-white',
                        'group rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:outline-none'
                      )}
                    >
                      <span className="uppercase">Cloud</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-gray-700">
                        <div className="max-w-screen-2xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:py-16">
                          {cloud.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                    <img
                                      className="h-6 w-6"
                                      alt={`Logo ${item.name}`}
                                      src={`/images/brands/${item.icon}`}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="uppercase rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:text-emerald-700 focus:outline-none"
              >
                Dedicados
              </a>

              <a
                href="#"
                className="uppercase rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:text-emerald-700 focus:outline-none"
              >
                Housing
              </a>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-emerald-600' : 'text-white',
                        'group rounded-md p-2 inline-flex items-center text-white font-medium hover:text-emerald-700 hover:border-emerald-600 focus:outline-none'
                      )}
                    >
                      <span className="uppercase">Mas servicios</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-gray-700">
                        <div className="max-w-screen-2xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-5 lg:px-8 lg:py-12 xl:py-16">
                          {servicios.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-600"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                    <img
                                      className="h-6 w-6"
                                      alt={`Logo ${item.name}`}
                                      src={`/images/brands/${item.icon}`}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-100">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="h-full bg-gray-700 absolute z-50 top-0 inset-x-0 transition transform origin-top-right xl:hidden overflow-y-auto"
        >
          <div className="h-full">
            <div className="h-full">
              <div className="px-4 py-5 sm:px-6 sm:py-4 lg:px-8 flex items-center justify-between">
                <div className="cursor-pointer">
                  <a href="/">
                    <div className="flex items-center">
                      <span className="sr-only">Rackmarkt</span>
                      <img
                        className="h-8 w-auto sm:h-10 mr-3"
                        src="/images/logos/rackmarkt_isotipo.png"
                        alt="Logo Rackmarkt"
                      />
                      <span className="text-white text-4xl tracking-widest font-semibold">
                        RACKMARKT
                      </span>
                    </div>
                  </a>
                </div>
                <div
                  className="-mr-2"
                  onClick={() => setMenuResponsiveOpen(!menuResponsiveOpen)}
                >
                  <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-emerald-600 hover:border-emerald-600 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="p-5 sm:pb-8" style={{ minHeight: 'calc(100vh - 84px)' }}>
                <nav
                  style={{
                    minHeight: 'calc(100vh - 124px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="grid gap-7 sm:gap-y-8 sm:gap-x-4">
                    {menuResponsive.map((menu) => (
                      <Disclosure as="div" key={menu.name} className="">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="text-left w-full flex justify-between items-center text-white bg-graypx-2">
                                <span className="w-full p-2 text-white font-semibold text-lg uppercase">
                                  {menu.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-6 w-6 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 px-6">
                              <div
                                className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-8 sm:gap-x-4 pt-4"
                                key={menu.name}
                              >
                                {menu.arr.map((menuItem) => (
                                  <a
                                    key={menuItem.name}
                                    href={menuItem.href}
                                    className="flex itemshover:bg-gray-50"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                                      {menu.name !== 'Cloud' &&
                                      menu.name !== 'Servicios' ? (
                                        <menuItem.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <img
                                          className="h-6 w-6"
                                          alt={`Logo ${menuItem.name}`}
                                          src={`/images/brands/${menuItem.icon}`}
                                          aria-hidden="true"
                                        />
                                      )}
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-white">
                                        {menuItem.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                  <div className="flex items-center flex-wrap sm:flex-nowrap">
                    <button
                      type="button"
                      className="w-full sm:w-1/2 h-12 mt-8 sm:mr-4 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none"
                    >
                      <PhoneIcon className="h-6 w-6 transform" />
                      <span className="pl-4"> +34 910 600 000</span>
                    </button>
                    <button
                      type="button"
                      className="w-full sm:w-1/2 h-12 mt-8 sm:ml-4 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none"
                    >
                      <ChatIcon className="h-6 w-6 transform" />
                      <span className="pl-4"> Iniciar chat</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
