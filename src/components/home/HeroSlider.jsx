import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Utils
import home1Img from "./../../assets/images/home1.webp";
import home2Img from "./../../assets/images/home2.webp";
import home3Img from "./../../assets/images/home3.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSlider = () => {
    return (
        <section className="flex w-full items-center justify-center">
            <Swiper
                className="flex max-w-screen-2xl justify-center"
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 3000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: true, // Keep off autoplay running on user interaction
                }}
            >
                <SwiperSlide>
                    <img src={home1Img} alt="HERO_IMAGE_1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={home2Img} alt="HERO_IMAGE_1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={home3Img} alt="HERO_IMAGE_1" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default HeroSlider;
