
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Link from 'next/link'


const products = [
    {
        id: 1,
        name: 'Bộ sửa xe cao cấp',
        href: '#',
        price: '300.000 ₫',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Lốp xe Nhập khẩu từ mỹ',
        href: '#',
        price: '323.000 ₫',
        color: 'Black',
        inStock: false,
        leadTime: '3–4 Tuần',
        size: 'Large',
        imageSrc: '/assets/images/carTool-4.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Phụ kiện độ xe',
        href: '#',
        price: '200.000 ₫',
        color: 'White',
        inStock: true,
        imageSrc: '/assets/images/carTool-3.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
]
const relatedProducts = [
    {
        id: 1,
        name: 'Lốp xe Nhập khẩu từ mỹ',
        href: '#',
        imageSrc: '/assets/images/carTool-3.jpg',
        imageAlt: 'Front of Lốp xe Nhập khẩu từ mỹ in natural leather.',
        price: '200.000 ₫',
        color: 'Natural',
    },
    {
        id: 2,
        name: 'Lốp xe Nhập khẩu từ mỹ',
        href: '#',
        imageSrc: '/assets/images/carTool-2.jpg',
        imageAlt: 'Front of Lốp xe Nhập khẩu từ mỹ in natural leather.',
        price: '200.000 ₫',
        color: 'Natural',
    },
    {
        id: 3,
        name: 'Lốp xe Nhập khẩu từ mỹ',
        href: '#',
        imageSrc: '/assets/images/carTool-3.jpg',
        imageAlt: 'Front of Lốp xe Nhập khẩu từ mỹ in natural leather.',
        price: '200.000 ₫',
        color: 'Natural',
    },
    {
        id: 4,
        name: 'Lốp xe Nhập khẩu từ mỹ',
        href: '#',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: 'Front of Lốp xe Nhập khẩu từ mỹ in natural leather.',
        price: '200.000 ₫',
        color: 'Natural',
    },
    // More products...
]

export default function ShoppingCart() {

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-2xl px-4 pt-4 sm:pt-8 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight capitalize text-gray-900 sm:text-4xl">giỏ hàng của bạn</h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            đơn hàng trong giỏ hàng
                        </h2>

                        <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            {products.map((product, productIdx) => (
                                <li key={product.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <Link href={`/products/${product.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">{product.color}</p>
                                                    {product.size ? (
                                                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                    ) : null}
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                    Quantity, {product.name}
                                                </label>
                                                <select
                                                    id={`quantity-${productIdx}`}
                                                    name={`quantity-${productIdx}`}
                                                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                >
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                </select>

                                                <div className="absolute top-0 right-0">
                                                    <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Remove</span>
                                                        <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                            {product.inStock ? (
                                                <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                            ) : (
                                                <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                                            )}

                                            <span>{product.inStock ? 'có sẵn' : `Ship trong ${product.leadTime}`}</span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Tổng kết
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Tổng giá</dt>
                                <dd className="text-sm font-medium text-gray-900">400.000 ₫</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Phí ship</span>
                                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Learn more about how tax is calculated</span>
                                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">25.000 ₫</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex text-sm text-gray-600">
                                    <span>Khác</span>
                                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Learn more about how tax is calculated</span>
                                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">2000 ₫</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">Tổng</dt>
                                <dd className="text-base font-medium text-gray-900">427.000 ₫</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-c-blue-1 py-3 px-4 text-base font-medium text-white shadow-sm hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-bg-c-blue-1 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Đặt ngay
                            </button>
                        </div>
                    </section>
                </form>

                {/* Related products */}
                <section aria-labelledby="related-heading" className="mt-24">
                    <h2 id="related-heading" className="text-lg font-medium text-gray-900">
                        Có thể bạn quan tâm&hellip;
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={relatedProduct.imageSrc}
                                        alt={relatedProduct.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700">
                                            <Link href={`/products/${relatedProduct.id}`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {relatedProduct.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

        </div>
    )
}
