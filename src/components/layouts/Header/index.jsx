import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../common/Logo'
import ShoppingCart from './ShoppingCart'

const navigations = [
  {
    label: "dịch vụ",
    current: true,
    href: "/services"
  },
  {
    label: "sản phẩm",
    current: false,
    href: "/products"
  },
  {
    label: "blogs",
    current: false,
    href: "/blogs"
  },
  {
    label: "giới thiệu",
    current: false,
    href: '/aboutUs'
  },
  {
    label: "hỗ trợ 24/7",
    href: "/support",
    current: false,
  },
  {
    label: "Giỏ hàng",
    href: "/shoppingCart",
    current: false,
  },
]

export default function Header() {
  const router = useRouter() ; 
  return (
    <Disclosure as="nav" className="bg-c-black-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">

                  <span className="block h-8 w-auto lg:hidden">
                    <Logo />
                  </span>
                  <span className="hidden h-8 w-auto lg:block">
                    <Logo />
                  </span>

                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {
                      navigations.map(item => (
                        <Link
                          href={item.href || "/"}
                          key={item.label}
                          className={`rounded-md px-3 py-2 text-sm font-medium first-letter:uppercase hover:bg-c-black-2 hover:text-white ${router.pathname.includes(item.href) ? "bg-c-black-2 text-white" : "text-gray-300"} ${item.href == '/shoppingCart' ? "hidden" : ""}`}
                        >
                          {item.label}
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    tìm kiếm
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-c-black-2 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="bạn đang tìm gì ?"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* shopping cart dropdown */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {
                navigations.map((item, navIndex) => (
                  <Disclosure.Button
                    as={Link}
                    key={navIndex + 1}
                    href={item.href || "/"}
                    className={`block rounded-md px-3 first-letter:uppercase hover:bg-c-black-2 py-2 text-base font-medium  ${router.pathname.includes(item.href) ? "bg-c-black-2 text-white" : "text-gray-300"}`}
                  >
                    {item.label}
                  </Disclosure.Button>
                ))
              }

            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
