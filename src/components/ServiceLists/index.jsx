
const files = [
    {
        id: 1,
        title: 'bảo dưỡng ô tô',
        source:
            '/assets/images/service-1.jpg',
    },
    {
        id: 2,
        title: 'sơn rửa ô tô',
        source:
            '/assets/images/service-2.jpg',
    },
    {
        id: 3,
        title: 'kiểm tra định kỳ',
        source:
            '/assets/images/service-3.jpg',
    },
    {
        id: 4,
        title: 'Đăng kiểm xe ô tô',
        source:
            '/assets/images/service-4.jpg',
    },
    {
        id: 5,
        title: 'Tư vấn mua xe cũ',
        source:
            '/assets/images/service-5.jpg',
    },
    {
        id: 6,
        title: 'Tư vấn nâng cấp xe',
        source:
            '/assets/images/service-1.jpg',
    },
    {
        id: 7,
        title: 'dịch vụ sửa chửa ô tô',
        source:
            '/assets/images/service-2.jpg',
    },
    {
        id: 8,
        title: 'bảo dưỡng ô tô',
        source:
            '/assets/images/service-3.jpg',
    },
    // More files...
]

export default function ServiceLists({ setOpen }) {
    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 my-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file) => (
                <li key={file.source} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                        <button onClick={() => setOpen(true) } type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">Xem chi tiết {file.title}</span>
                        </button>
                    </div>
                    <p className="pointer-events-none capitalize mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
                </li>
            ))}
        </ul>
    )
}
