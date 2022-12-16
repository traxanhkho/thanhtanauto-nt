// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';

const SwiperComponent = ({ children }) => {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
            modules={[Autoplay]}
        >
            {children}
        </Swiper>
    );
};

export default SwiperComponent; 