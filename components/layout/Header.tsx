/* eslint-disable indent */
import { Fragment, useRef } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Menu from '../../constants/menu-header'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const menu = {
    Dominios: useRef(null),
    Hosting: useRef(null),
    VPS: useRef(null),
    Cloud: useRef(null),
    Servicios: useRef(null)
  }

  const menuResponsive = useRef(null)

  return (
    <Popover className="fixed z-50 bg-blue-600 top-0 w-full max-h-20">
      <div className="h-20 max-w-screen-2xl mx-auto flex justify-between items-center px-6">
        <div className="flex justify-between items-center w-full">
          <div className="cursor-pointer flex justify-start">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">Rackmarkt</span>
                <img
                  className="h-8 w-auto"
                  src="/images/logos/rackmarkt_isotipo.png"
                  alt="Logo Rackmarkt"
                />
                <span className="text-3xl text-white tracking-widest font-semibold">
                  RACKMARKT
                </span>
              </a>
            </Link>
          </div>
          {/* Botón menu hamburguesa */}
          <div className="-mr-2 -my-2 xl:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-green-600 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Menú */}
          <Popover.Group as="nav" className="hidden xl:flex space-x-10">
            {Object.entries(Menu).map(([key, value]) => (
              <div key={key}>
                {value.popover ? (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          ref={menu[value.title]}
                          className={classNames(
                            'text-white group rounded-md inline-flex items-center font-medium focus:outline-none'
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
                                    <a
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-blue-700"
                                      onClick={() => menu[value.title]?.current?.click()}
                                    >
                                      {value.title !== 'Cloud' &&
                                      value.title !== 'Servicios' ? (
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
                                        <p className="font-medium text-white">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text_small text-gray-300">
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
                    <a className="font-medium text-white text-base">{value.title}</a>
                  </Link>
                )}
              </div>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* Menu responsive */}
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 transition transform origin-top-right xl:hidden z-20"
      >
        <div className="shadow-lg bg-blue-600 rounded-b-lg">
          <div className="flex items-center justify-between pt-5 pb-5 px-6">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">Rackmarkt</span>
                <img
                  className="h-8 w-auto"
                  src="/images/logos/rackmarkt_isotipo.png"
                  alt="Logo Rackmarkt"
                />
                <span className="text-3xl text-white tracking-widest font-semibold">
                  RACKMARKT
                </span>
              </a>
            </Link>
            <div className="-mr-2">
              <Popover.Button
                ref={menuResponsive}
                className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-green-600 focus:outline-none "
              >
                <span className="sr-only">close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div
            className="px-6 pb-6 overflow-y-auto bg-blue-700 rounded-b-lg"
            style={{ maxHeight: 'calc(100vh - 180px)' }}
          >
            <nav className="grid">
              {Object.entries(Menu).map(([key, value]) => (
                <div key={key} className="pt-6">
                  {value.items.length > 0 ? (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-200">
                              <p className="font-medium text-gray-200 uppercase">
                                {value.title}
                              </p>
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
                          <Disclosure.Panel as="dd" className="mt-2">
                            {value.items.length > 0 &&
                              value.items.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <a
                                    className="p-4 mt-4 mb-4 flex items-start rounded-lg hover:bg-blue-600"
                                    onClick={() => menuResponsive?.current?.click()}
                                  >
                                    {value.title !== 'Cloud' &&
                                    value.title !== 'Servicios' ? (
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 mt-1 text-white"
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
                                      <p className="font-medium text-gray-200">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text_small text-gray-400">
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
                    <Link key={value.title} href={value.href}>
                      <a
                        className="font-medium uppercase text-gray-200"
                        onClick={() => menuResponsive?.current?.click()}
                      >
                        {value.title}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
