import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NewsMedia({ noHeading, id, size = "h-full w-16" }) {
    return (
        <Link href={`/blogs/${id}`} className="flex group transition-all hover:opacity-70">
            <div className="mr-4 flex-shrink-0">
                <img src="/assets/images/blog-2.jpg" className={classNames("border border-gray-300 bg-white text-gray-300", size)} alt="" />
            </div>
            <div>
                {!noHeading && <h4 className="text-lg font-bold mb-1 group-hover:text-primary">Lorem ipsum</h4>}
                <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorem maiores accusamus impedit eaque iure tempore illo maxime minima! Nam facere quasi perferendis totam magnam consequatur impedit velit soluta laudantium.
                </p>
            </div>
        </Link>
    )
}

