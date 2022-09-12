import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Inicial',
    href: '#',
    priceMonthly: 12,
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'
  },
  {
    name: 'Base',
    href: '#',
    priceMonthly: 24,
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'
  },
  {
    name: 'Medio',
    href: '#',
    priceMonthly: 32,
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.'
  },
  {
    name: 'Avanzado',
    href: '#',
    priceMonthly: 48,
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.'
  }
]

const sections = [
  {
    name: 'Features',
    features: [
      {
        name: 'Molestie lobortis massa.',
        tiers: { Inicial: true, Base: true, Medio: true, Avanzado: true }
      },
      {
        name: 'Urna purus felis.',
        tiers: { Inicial: true, Base: true, Medio: true, Avanzado: true }
      },
      { name: 'Tellus pulvinar sit dictum.', tiers: { Base: true, Medio: true, Avanzado: true } },
      {
        name: 'Convallis.',
        tiers: { Base: 'Up to 20 users', Medio: 'Up to 50 users', Avanzado: 'Up to 100 users' }
      }
    ]
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Adipiscing.', tiers: { Inicial: true, Base: true, Medio: true, Avanzado: true } },
      { name: 'Eget risus integer.', tiers: { Base: true, Medio: true, Avanzado: true } },
      { name: 'Gravida leo urna velit.', tiers: { Medio: true, Avanzado: true } },
      { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Medio: true, Avanzado: true } }
    ]
  },
  {
    name: 'Support',
    features: [
      { name: 'Sit dignissim.', tiers: { Inicial: true, Base: true, Medio: true, Avanzado: true } },
      { name: 'Congue at nibh et.', tiers: { Base: true, Medio: true, Avanzado: true } },
      { name: 'Volutpat feugiat mattis.', tiers: { Base: true, Medio: true, Avanzado: true } },
      { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Medio: true, Avanzado: true } }
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Specifications() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl bg-gray-100 py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="mx-auto max-w-2xl space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="mb-8 px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${tier.priceMonthly}
                  </span>{' '}
                  <span className="text-base font-medium text-gray-600">/mo</span>
                </p>
                <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                <a
                  href={tier.href}
                  className="mt-6 block w-full rounded-md border border-blue-600 bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Buy {tier.name}
                </a>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="border-t border-gray-200 bg-gray-50 py-3 px-4 text-left text-sm font-medium text-gray-900">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th
                          className="py-5 px-4 text-left text-sm font-normal text-gray-600"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-right text-sm text-gray-600">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={classNames(
                  tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <a
                  href={tier.href}
                  className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="h-px w-full table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="px-6 pb-4 text-left text-sm font-medium text-gray-900" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/5 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-t border-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-left align-top text-sm font-medium text-gray-900"
                  scope="row"
                >
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative table h-full">
                      <p>
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                          ${tier.priceMonthly}
                        </span>{' '}
                        <span className="text-base font-medium text-gray-600">/mo</span>
                      </p>
                      <p className="mt-4 mb-16 text-sm text-gray-600">{tier.description}</p>
                      <a
                        href={tier.href}
                        className="5 absolute bottom-0 block w-full flex-grow rounded-md border border-blue-600 bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900"
                      colSpan={5}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-left text-sm font-normal text-gray-600"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-600">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in{' '}
                                {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="px-6 pt-5">
                    <a
                      href={tier.href}
                      className="block w-full rounded-md border border-blue-600 bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Specifications
