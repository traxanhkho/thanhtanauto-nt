import { useContext } from "react";
import { uicontext } from "../../context/UIcontext";

function SlideItem({ slide }) {
    const { slideOver } = useContext(uicontext) ; 
    return (
        <div className='h-full bg-cover bg-center grid lg:grid-cols-2 px-8'>
            <div className="my-auto max-w-xl md:max-w-2xl lg:max-w-full">
                <h2 className="font-bold text-2xl md:text-3xl text-primary capitalize mb-2">{slide.title}</h2>
                <p className="text-gray-300 mb-2 line-clamp-3 md:line-clamp-none">{slide.description}</p>
                <button
                    type="button"
                    onClick={() => slideOver.setOpen(true)}
                    className="inline-flex items-center capitalize rounded border border-transparent bg-primary px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Đặt Lịch Ngay
                </button>
            </div>
            <div className="h-60 hidden lg:block m-auto">
                <img src={slide.imgURL} className="h-full w-full object-contain" alt="hình ảnh xe ô tô" />
            </div>
        </div>
    );
}

export default SlideItem;