
export default function Banner() {
  return (
    <div className="max-w-7xl h-[180px] mx-2 sm:mx-4 lg:mx-8 xl:mx-auto px-8" style={{ backgroundImage: `url("/assets/images/bg-1.jpg")` }}>
      <div className="grid place-items-center h-full lg:h-auto lg:place-items-start lg:grid-cols-3">
        <div className="hidden lg:block">
          <img src="/assets/images/banner-1.png" alt="hình ảnh banner" />
        </div>
        <div className="col-span-2 flex flex-col gap-2 item-center lg:mt-8">
          <h3 className="uppercase text-2xl sm:text-3xl text-white font-bold">hỗ trợ khẩn cấp nhanh chóng , an toàn và chuyên nghiệp
          </h3>
          <a  href="tel:+84 3672 19 606" className="ml-auto w-[200px] inline-flex items-center justify-center capitalize rounded border border-transparent bg-primary px-2.5 py-1.5 text-xl font-bold text-white shadow-sm hover:bg-c-orange-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><i className="fa fa-phone mr-2 mt-[2px]" aria-hidden="true"></i> Gọi ngay</a>
        </div>
      </div>
    </div>
  )
}