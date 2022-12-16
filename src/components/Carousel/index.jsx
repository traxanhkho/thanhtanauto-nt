// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import SlideItem from './SlideItem';

import { Autoplay, Navigation } from 'swiper';

const sliders = [
    {
        _id: 1,
        title: "Gara Thanh Tân auto được thành lập từ năm 2012 1",
        imgURL : "/assets/images/bg-carousel.png" ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolore eaque pariatur aspernatur consequatur atque voluptatem dolor doloremque illum? Eveniet, repudiandae. Sed adipisci, nobis dolor ipsum nemo odit est repellendus."
    },
    {
        _id: 2,
        title: "Gara Thanh Tân auto được thành lập từ năm 2012 2",
        imgURL : "/assets/images/car-1.png" ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolore eaque pariatur aspernatur consequatur atque voluptatem dolor doloremque illum? Eveniet, repudiandae. Sed adipisci, nobis dolor ipsum nemo odit est repellendus."
    },
    {
        _id: 3,
        title: "Gara Thanh Tân auto được thành lập từ năm 2012 3",
        imgURL : "/assets/images/bg-carousel.png" ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolore eaque pariatur aspernatur consequatur atque voluptatem dolor doloremque illum? Eveniet, repudiandae. Sed adipisci, nobis dolor ipsum nemo odit est repellendus."
    },
    {
        _id: 4,
        title: "Gara Thanh Tân auto được thành lập từ năm 2012 4",
        imgURL : "/assets/images/car-1.png" ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolore eaque pariatur aspernatur consequatur atque voluptatem dolor doloremque illum? Eveniet, repudiandae. Sed adipisci, nobis dolor ipsum nemo odit est repellendus."
    },

]

function Carousel() {
    return (
        <div className="h-72 relative bg-[url('/assets/images/service-bg.jpg')] after:contents-[''] after:absolute after:inset-0 after:bg-c-black-4 ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay,Navigation]}
                className="carousel-slider max-w-7xl mx-auto "
            >
                {sliders.map(item => (
                    <SwiperSlide key={item._id}>
                        <SlideItem slide={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;


