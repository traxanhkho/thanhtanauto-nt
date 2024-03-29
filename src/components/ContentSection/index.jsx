import Breadcrumb from "../Breakcrumb";

const pages = [
    { name: 'Blogs', href: '/blogs', current: false },
    { name: 'Giới thiệu về Gara Thanh Tân Auto', href: '#', current: true },
  ]

export default function ContentSection() {
    return (
        <div className="relative overflow-hidden bg-white py-4">
            <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 items-center">
                <Breadcrumb pages={pages} />
                <span className="text-c-gray-2 text-sm font-medium">Thứ Tư, ngày 07/12/2022 05:06 AM (GMT+7)</span>
            </div>
            <div className="relative mt-2">
                <div className="mx-auto text-lg">
                    <h1>
                        <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Trung Tâm Bảo Dưỡng Sửa Chữa Ô Tô Gara Thanh Tân Auto
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                        aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                        egestas fringilla sapien.
                    </p>
                </div>
                <div className=" prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                        Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                        tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                        <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
                    </p>
                    <ul role="list">
                        <li>Quis elit egestas venenatis mattis dignissim.</li>
                        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                    </ul>
                    <p>
                        Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
                        porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
                        purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
                    </p>
                    <h2>From beginner to expert in 30 days</h2>
                    <p>
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                        Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                        mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                        ipsum eu a sed convallis diam.
                    </p>
                    <blockquote>
                        <p>
                            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                            pellentesque. Blandit amet, sed aenean erat arcu morbi.
                        </p>
                    </blockquote>
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                    <figure className="prose mx-auto">
                        <img
                            className="w-full rounded-lg"
                            src="/assets/images/team-1.jpg"
                            alt=""
                            width={1310}
                            height={873}
                        />
                        <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                    </figure>
                    <h2>Everything you need to get up and running</h2>
                    <p>
                        Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                        volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                        non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                        congue erat ac. Cras fermentum convallis quam.
                    </p>
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <button className="px-4 py-2 font-bold text-white rounded-lg bg-c-blue-1 hover:opacity-70"><i className="fa fa-share" aria-hidden="true"></i> chia sẻ</button>
                <p ><span className="font-medium">Tác giả:</span> Nguyễn Anh Đang</p>
            </div>
        </div>
    )
}
