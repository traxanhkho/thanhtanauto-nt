
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function ServicesCard({ name, imgURL, setOpen , className }) {
    return (
        <div className={classNames('relative h-full group overflow-hidden cursor-pointer',className)}>
            <img src={imgURL} className="h-full w-full object-cover group-hover:scale-110 transition-all" alt="hình nền dịch vụ bảo dưỡng xe" />
            <span className='absolute flex inset-0 bg-c-black-3'>
                <button className='m-auto text-sm sm:text-xl uppercase font-bold text-white bg-c-gray-1 px-10 py-[10px] hover:bg-primary' onClick={() => setOpen(true)}>{name}</button>
            </span>
        </div>
    );
}

export default ServicesCard;