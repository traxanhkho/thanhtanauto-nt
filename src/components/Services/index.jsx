import { useContext } from "react";
import { uicontext } from "../../context/UIcontext";
import ServicesCard from "./ServicesCard";


const services = [
    {
        id: 1,
        name: "bảo dưỡng xe",
        imgURL: "/assets/images/service-1.jpg",
    },
    {
        id: 2,
        name: "Dịch vụ sơn xe",
        imgURL: "/assets/images/service-2.jpg",
    },
    {
        id: 3,
        name: "Dịch vụ rửa xe",
        imgURL: "/assets/images/service-3.jpg",
    },
    {
        id: 4,
        name: "Dịch vụ tư vấn",
        imgURL: "/assets/images/service-4.jpg",
    },
    {
        id: 5,
        name: "Hỗ trợ khẩn cấp 24/7",
        imgURL: "/assets/images/service-5.jpg",
    },

]

function Services() {
   const { slideOver } = useContext(uicontext) ; 
    return (
        <>
            <div className=' px-2 sm:px-4 lg:px-8 bg-c-black-1 py-8 sm:py-16 pt-4 sm:pt-8'>
                <div className="max-w-7xl mx-auto">
                <h2 className=' capitalize font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-center mb-8 text-primary'>dịch vụ của chúng tôi :</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:min-h-[400px] lg:min-h-[560px]'>
                    {
                        services.map((service, serviceIndex) => {
                            if (serviceIndex !== 0)
                                return <ServicesCard key={service.id} setOpen={slideOver.setOpen} name={service.name} imgURL={service.imgURL} />
                            return <ServicesCard key={service.id} className="col-start-1 col-end-3 h-[120px] sm:h-[200px] lg:h-full lg:col-span-2 md:row-start-1 md:row-end-3" setOpen={slideOver.setOpen} name={service.name} imgURL={service.imgURL} />
                        })
                    }
                </div>
                </div>
            </div>
        </>
    );
}

export default Services;