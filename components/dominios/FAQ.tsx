import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id: '1',
    question: 'Ea exercitation ea ea id nulla qui commodo reprehenderit sint.',
    answer:
      'Cillum eu eu id tempor fugiat enim deserunt consequat ea consequat. Proident anim labore culpa nostrud ea Lorem cillum elit laboris ea voluptate aute. Reprehenderit ut adipisicing cupidatat nostrud dolor officia aliquip consectetur ipsum ex. Sunt quis ex aute ex. Non officia labore pariatur consequat laborum qui in voluptate elit ipsum. Amet laboris cupidatat aliqua mollit aute nulla mollit ad do nisi.'
  },
  {
    id: '2',
    question: 'Velit elit anim amet ea ad minim Lorem.',
    answer:
      'Irure labore qui aliqua dolor labore. Et eiusmod enim sunt amet voluptate ex cupidatat eu velit est. Deserunt amet aute excepteur voluptate sit occaecat dolor exercitation cupidatat sunt officia dolor duis magna. Eiusmod nostrud eiusmod fugiat reprehenderit reprehenderit excepteur ut officia occaecat. Elit officia pariatur consectetur exercitation consectetur duis mollit ad.'
  },
  {
    id: '3',
    question: 'Dolor ut anim consequat Lorem mollit sit laboris.',
    answer:
      'Ad id eiusmod esse fugiat et officia irure. Elit do nulla laborum Lorem duis. Dolor eu consequat reprehenderit consequat est et sunt ipsum ex do ex aute fugiat. Mollit aute nostrud nisi laboris incididunt adipisicing elit laborum laborum aliqua id.'
  },
  {
    id: '4',
    question: 'Ullamco eiusmod ut dolore non non pariatur irure qui.',
    answer:
      'Sint nostrud excepteur dolor et dolore. Lorem sunt consequat pariatur aute consectetur labore minim mollit reprehenderit deserunt velit amet. Minim in labore consequat consectetur cupidatat voluptate. Cupidatat cupidatat cillum eiusmod enim. Consequat ullamco labore laborum incididunt in mollit reprehenderit nostrud commodo.'
  },
  {
    id: '5',
    question: 'Aute velit esse commodo elit eu enim.',
    answer:
      'Irure anim labore nisi aute. Sunt cillum incididunt non nisi laboris est sit esse dolor pariatur. Proident consectetur enim labore qui dolore ut nostrud ullamco dolor velit irure occaecat. Do velit nulla amet eiusmod qui ullamco amet nisi amet sunt ea et. Labore laborum ut nulla duis sit velit sit commodo. Quis ullamco do dolore nisi proident enim deserunt aute. Et laboris magna ipsum minim officia in.'
  },
  {
    id: '6',
    question: 'Ipsum nulla cillum esse deserunt voluptate laborum sint magna.',
    answer:
      'Pariatur commodo voluptate do cillum qui magna sint elit anim magna Lorem. Commodo est laboris ex ad ipsum excepteur incididunt Lorem. Deserunt magna excepteur sit officia dolore ad fugiat voluptate. Ad est ea officia ipsum qui duis ut tempor consequat mollit sint. Ea reprehenderit dolore cupidatat laborum pariatur anim esse velit sint laborum qui aute quis dolor. Consequat est elit qui eu occaecat ut.'
  },
  {
    id: '7',
    question: 'Quis irure nisi magna ad elit non eiusmod laboris incididunt laboris.',
    answer:
      'Irure ad non nisi non pariatur et veniam elit labore occaecat excepteur duis eu do. Occaecat voluptate labore in incididunt exercitation proident dolor nisi ad Lorem officia amet officia. Pariatur duis sint do amet voluptate officia aute nulla. Id magna aute nulla consectetur incididunt commodo culpa labore est amet nulla cupidatat anim dolore.'
  },
  {
    id: '8',
    question:
      'Incididunt deserunt minim cillum anim aliqua culpa est labore fugiat velit enim velit labore aute.',
    answer:
      'Sunt ut exercitation veniam aute esse enim adipisicing exercitation incididunt aliquip id eu culpa labore. Quis amet aute id incididunt cillum. Ut commodo eiusmod exercitation sunt in ea minim proident exercitation exercitation dolor veniam reprehenderit. In officia laborum labore est veniam consequat. Sunt culpa magna laborum officia incididunt do consequat mollit sint. Sit commodo ex incididunt minim minim do consectetur sint.'
  },
  {
    id: '9',
    question:
      'Nulla laborum sint laborum non commodo velit labore veniam pariatur do sint commodo sit deserunt.',
    answer:
      'Velit tempor minim pariatur tempor ea ullamco voluptate do magna pariatur esse reprehenderit tempor. Dolore voluptate incididunt eu velit duis dolore incididunt Lorem ut in ea. Voluptate deserunt ullamco ullamco tempor. Consequat cupidatat sint dolor reprehenderit in quis id. Consequat qui sit cillum ut incididunt mollit culpa. Excepteur minim irure et id aute commodo incididunt.'
  },
  {
    id: '10',
    question: 'Voluptate commodo reprehenderit quis excepteur amet esse voluptate esse.',
    answer:
      'Officia id enim aliqua veniam incididunt nostrud excepteur qui occaecat aliquip quis ex. Sint laboris aliquip irure minim aliquip irure aliquip mollit pariatur non elit nisi proident. Esse reprehenderit commodo officia aute occaecat et ullamco tempor nostrud sunt proident.'
  },
  {
    id: '11',
    question: 'Adipisicing eu esse ut veniam.',
    answer:
      'Labore duis id non eiusmod ea anim dolor exercitation labore ea fugiat. Aliquip excepteur mollit enim nostrud deserunt ut ea dolor. Nisi minim magna dolore ex. Ad dolore id ullamco exercitation deserunt veniam quis laboris minim esse exercitation ullamco.'
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQDominios() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="flex flex-col md:flex-row">
            <dl className="md:m-6 space-y-6 w-full md:w-1/2">
              {faqs
                .slice(0, faqs.length % 2 === 0 ? faqs.length / 2 : (faqs.length + 1) / 2)
                .map((faq) => (
                  <Disclosure as="div" key={faq.id} className="pt-6">
                    {({ open }: any) => (
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
            <dl className="md:m-6 space-y-6 w-full md:w-1/2">
              {faqs
                .slice(faqs.length % 2 === 0 ? faqs.length / 2 : (faqs.length + 1) / 2)
                .map((faq) => (
                  <Disclosure as="div" key={faq.id} className="pt-6">
                    {({ open }: any) => (
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
    </div>
  )
}
