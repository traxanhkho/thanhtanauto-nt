import Link from "next/link"


const posts = [
    {
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            '/assets/images/blog-1.jpg',
        readingTime: '6 Phút',
        author: {
            name: 'Minh Tiến',
            href: '#',
            imageUrl:
                '/assets/images/avt-4.jpg',
        },
    },
    {
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            '/assets/images/blog-2.jpg',
        readingTime: '4 Phút',
        author: {
            name: 'Tiến Đạt',
            href: '#',
            imageUrl:
                '/assets/images/avt-1.jpg',
        },
    },
    {
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            '/assets/images/blog-3.jpg',
        readingTime: '11 Phút',
        author: {
            name: 'Nguyễn Anh Đang',
            href: '#',
            imageUrl:
                '/assets/images/avt-3.jpg',
        },
    },
]

export default function BlogsGroup() {
    return (
        <div className="relative bg-gray-50 max-w-7xl pt-8 py-16 lg:pb-20 ">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">bài viết tiêu biểu</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post, postIndex) => (
                        <div key={postIndex} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <Link href={`/blogs/${postIndex + 1}`} className="block">
                                        <p className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={post.author.href}>
                                            <span className="sr-only">{post.author.name}</span>
                                            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={post.author.href} className="hover:underline">
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post.readingTime} Đọc</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}