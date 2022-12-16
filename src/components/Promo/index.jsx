
export default function Promo({ setOpen}) {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Decorative background image and gradient */}
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                    <img
                        src="/assets/images/service-bg.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Callout */}
            <section
                aria-labelledby="sale-heading"
                className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Cam kết bảo dưỡng xe ô tô uy tín và nhanh chóng
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit doloremque nulla similique aperiam voluptas voluptates exercitationem.
                    </p>
                    <a
                        onClick={() => setOpen(true)}
                        className="mt-6 inline-block w-full rounded-md border border-transparent cursor-pointer bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                    >
                        Đặt lịch hẹn với chúng tôi ngay
                    </a>
                </div>
            </section>
        </div>
    )
}