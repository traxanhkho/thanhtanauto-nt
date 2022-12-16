import Link from "next/link"

const products = [
    {
        id: 1,
        name: 'bộ sửa xe ô tô cao cấp',
        description: 'bộ sửa xe chuyên nghiệp gồm 24 món được sản xuất tại mỹ ',
        href: '#',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: 'hình ảnh bộ sửa xe cao cấp',
        price: '300.000 ₫',
    },
    {
        id: 2,
        name: 'bộ sửa xe ô tô cao cấp',
        description: 'bộ sửa xe chuyên nghiệp gồm 24 món được sản xuất tại mỹ ',
        href: '#',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: 'hình ảnh bộ sửa xe cao cấp',
        price: '300.000 ₫',
    },
    {
        id: 3,
        name: 'bộ sửa xe ô tô cao cấp',
        description: 'bộ sửa xe chuyên nghiệp gồm 24 món được sản xuất tại mỹ ',
        href: '#',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: 'hình ảnh bộ sửa xe cao cấp',
        price: '300.000 ₫',
    },
    {
        id: 4,
        name: 'bộ sửa xe ô tô cao cấp',
        description: 'bộ sửa xe chuyên nghiệp gồm 24 món được sản xuất tại mỹ ',
        href: '#',
        imageSrc: '/assets/images/carTool-1.png',
        imageAlt: 'hình ảnh bộ sửa xe cao cấp',
        price: '300.000 ₫',
    },
    // More products...
]

const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz C 300 AMG',
        description: 'Mercedes-Benz C 300 AMG là phiên bản thể thao hiệu suất cao của thương hiệu Đức',
        href: '#',
        imageSrc: '/assets/images/car-1.png',
        imageAlt: 'hình ảnh Mercedes-Benz C 300 AMG',
        price: '2.089.000.000 ₫',
    },
    {
        id: 2,
        name: 'Mercedes-Benz C 300 AMG',
        description: 'Mercedes-Benz C 300 AMG là phiên bản thể thao hiệu suất cao của thương hiệu Đức',
        href: '#',
        imageSrc: '/assets/images/car-1.png',
        imageAlt: 'hình ảnh Mercedes-Benz C 300 AMG',
        price: '2.089.000.000 ₫',
    },
    {
        id: 3,
        name: 'Mercedes-Benz C 300 AMG',
        description: 'Mercedes-Benz C 300 AMG là phiên bản thể thao hiệu suất cao của thương hiệu Đức',
        href: '#',
        imageSrc: '/assets/images/car-1.png',
        imageAlt: 'hình ảnh Mercedes-Benz C 300 AMG',
        price: '2.089.000.000 ₫',
    },
]

export default function Products() {
    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">phụ kiện thay thế :</h2>

                <div className="mt-8 mb-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-8 ">
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <h3 className="text-md font-medium capitalize text-gray-900">{product.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-lg font-semibold px-2 py-1 bg-primary rounded-md text-white">{product.price}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="relative flex capitalize  items-center w-full justify-center rounded-md border border-transparent bg-primary py-2 px-8 text-sm font-medium text-white hover:opacity-70"
                                >
                                    thêm giỏ hàng<span className="sr-only">, {product.name}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">mua bán xe cũ :</h2>

                <div className="mt-8 relative grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {cars.map((product) => (
                        <div key={product.id}>
                            <div className="relative">
                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <Link href={`/products/${product.id}`} className="text-md font-medium transition-colors hover:text-primary capitalize text-gray-900">{product.name}</Link>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-lg px-2 py-1 bg-primary rounded-md font-semibold text-white">{product.price}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}