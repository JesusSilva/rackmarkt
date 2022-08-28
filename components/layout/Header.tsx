/* eslint-disable indent */
import { Fragment } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, GiftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Menu from '../../constants/menu-header'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="fixed z-40 bg-blue-600 top-0 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="cursor-pointer flex justify-start">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">Rackmarkt</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/images/logos/rackmarkt_isotipo.png"
                  alt="Logo Rackmarkt"
                />
                <span className="text-white text-4xl tracking-widest font-semibold ml-2">
                  RACKMARKT
                </span>
              </a>
            </Link>
          </div>
          {/* Botón menu hamburguesa */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Menú */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {Object.entries(Menu).map(([key, value]) => (
              <div key={key}>
                {value.popover ? (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            'text-white group rounded-md inline-flex items-center text-base font-medium focus:outline-none'
                          )}
                        >
                          <span>{value.title}</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-50' : 'text-white',
                              'ml-2 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-blue-600 px-5 py-6 sm:gap-8 sm:p-8">
                                {value.items.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-blue-700">
                                      {value.title !== 'Cloud' && value.title !== 'Servicios' ? (
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-white"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <img
                                          className="h-6 w-6"
                                          alt={`Logo ${item.name}`}
                                          src={`/images/brands/${item.icon}`}
                                          aria-hidden="true"
                                        />
                                      )}
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-white">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-blue-700 text-white space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                <Link href={value.href}>
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-blue-600">
                                    Más sobre {value.title}...
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link href={value.href}>
                    <a className="text-base font-medium text-white">{value.title}</a>
                  </Link>
                )}
              </div>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* Menu responsive */}
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
          className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden z-20"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/images/logos/rackmarkt_isotipo.png"
                    alt="Logo Rackmarkt"
                  />
                  <span className="text-gray-700 text-4xl tracking-widest font-semibold ml-2">
                    RACKMARKT
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid">
                  {Object.entries(Menu).map(([key, value]) =>
                    value.items.length > 0 ? (
                      <Disclosure key={key} as="div" className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                <span className="font-medium text-gray-900">{value.title}</span>
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
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              {value.items.length > 0 &&
                                value.items.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <span className="font-medium text-lg text-gray-900 pt-6">{value.title}</span>
                    )
                  )}
                </nav>
              </div>
            </div>

            {/* Menu responsive - Footer */}
            <div className="py-6 px-5 space-y-6">
              <p className="text-gray-500 flex items-center">
                <div className="h-16 w-16">
                  <GiftIcon className="h-full w-full" />
                </div>
                <span className="ml-6">
                  Este mes con la compra de un vps elite, llevese un dominio de regalo.
                </span>
              </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}