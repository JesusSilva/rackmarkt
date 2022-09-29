import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const types = [
  {
    id: 1,
    title: 'DV',
    description: 'Validación de dominio'
  },
  {
    id: 2,
    title: 'OV',
    description: 'Validación de organización'
  },
  {
    id: 3,
    title: 'EV',
    description: 'Validación extendida'
  },
  {
    id: 4,
    title: 'Otros',
    description: 'Otros tipos de certificados'
  }
]

const features = [
  {
    name: 'Competitive rates',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: BoltIcon
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: EnvelopeIcon
  }
]

export default function TypeOfCertificate() {
  const [selectedType, setSelectedType] = useState(types[0])

  return (
    <div className="overflow-hidden bg-blue-600">
      <div className="relative mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-blue-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certificados SSL
            </h2>

            <RadioGroup value={selectedType} onChange={setSelectedType}>
              <div className="mt-4 grid grid-cols-1 gap-y-6">
                {types.map((type) => (
                  <RadioGroup.Option
                    key={type.id}
                    value={type}
                    className={({ checked }) =>
                      `
                      ${checked ? 'border-green-600' : 'border-gray-50'}
                      relative flex justify-start pl-10 cursor-pointer rounded-lg border-4 bg-white p-4 focus:outline-none
                    `
                    }
                  >
                    <span className="flex flex-col">
                      <RadioGroup.Label as="span">{type.title}</RadioGroup.Label>
                      <RadioGroup.Description as="span">{type.description}</RadioGroup.Description>
                    </span>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <dl className="sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-8">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="">
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
