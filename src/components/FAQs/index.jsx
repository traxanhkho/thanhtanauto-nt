
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "công ty của chúng tôi cung cấp giải pháp gì?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam ipsa obcaecati excepturi aliquid minus deleniti quisquam? Veritatis, vero nisi eaque eveniet fugit dicta fugiat, tempora iste quia, ipsum non?",
  },
  {
    question: "công ty của chúng tôi thành lập năm bao nhiêu ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam ipsa obcaecati excepturi aliquid minus deleniti quisquam? Veritatis, vero nisi eaque eveniet fugit dicta fugiat, tempora iste quia, ipsum non?",
  },
  {
    question: "công ty của chúng tôi cung cấp giải pháp gì?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam ipsa obcaecati excepturi aliquid minus deleniti quisquam? Veritatis, vero nisi eaque eveniet fugit dicta fugiat, tempora iste quia, ipsum non?",
  },
  {
    question: "công ty của chúng tôi thành lập năm bao nhiêu ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam ipsa obcaecati excepturi aliquid minus deleniti quisquam? Veritatis, vero nisi eaque eveniet fugit dicta fugiat, tempora iste quia, ipsum non?",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQs() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight capitalize text-gray-900 sm:text-4xl">
            các câu hỏi thường gặp ?
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900 first-letter:uppercase">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
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
