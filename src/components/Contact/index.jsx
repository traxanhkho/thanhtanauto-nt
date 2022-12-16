

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold capitalize tracking-tight text-gray-900 sm:text-3xl">Kết nối với chúng tôi</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                            arcu.
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Địa chỉ công ty</dt>
                                <dd>
                                    <p className='text-black font-medium'>Địa chỉ công ty :</p>
                                    <p>Đường 23/10, Nha Trang, Khánh Hòa</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">+84 123-4567</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">datdang0899@gmail.com</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Họ tên
                                </label>
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-c-blue-1 focus:ring-c-blue-1"
                                    placeholder="Họ Tên"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-c-blue-1 focus:ring-c-blue-1"
                                    placeholder="Địa chỉ Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-c-blue-1 focus:ring-c-blue-1"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-c-blue-1 focus:ring-c-blue-1"
                                    placeholder="Lời nhắn của bạn"
                                    defaultValue={''}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-c-blue-1 py-3 px-6 text-base font-medium text-white shadow-sm hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-c-blue-1 focus:ring-offset-2"
                                >
                                    Gửi Thông Tin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
