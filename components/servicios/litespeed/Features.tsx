import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Unlimited Inboxes',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: InboxIcon
  },
  {
    name: 'Manage Team Members',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: UsersIcon
  },
  {
    name: 'Spam Report',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TrashIcon
  },
  {
    name: 'Compose in Markdown',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PencilSquareIcon
  },
  {
    name: 'Team Reporting',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentChartBarIcon
  },
  {
    name: 'Saved Replies',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowUturnLeftIcon
  },
  {
    name: 'Email Commenting',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatBubbleLeftEllipsisIcon
  },
  {
    name: 'Connect with Customers',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HeartIcon
  }
]

export default function Features() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-white">Licencias</h2>
        <p className="mt-4 max-w-screen-2xl text-lg text-white">
          A pesar de que LiteSpeed es un software propietario que funciona bajo licencia,
          está incluido en todas nuestras soluciones de hosting sin costes extra. Te
          mostramos a continuación las distintas licencias que ofrecemos si decides
          utilizar LiteSpeed en uno de nuestros servidores dedicados o VPS:
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
