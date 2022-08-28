/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const faqs = [
  {
    id: 1,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 2,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 3,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 4,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 5,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 6,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 7,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 8,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  },
  {
    id: 9,
    question: 'Consectetur laborum amet laborum enim culpa.',
    answer:
      'Amet nulla est minim consectetur voluptate sit et duis laboris duis excepteur. Quis dolor quis cillum veniam Lorem anim duis duis quis eiusmod. Irure exercitation ad et commodo amet consectetur amet amet nulla deserunt ut eiusmod.'
  }
]

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
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
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
