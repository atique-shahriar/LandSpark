import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center md:bg-center"
          style={{
            backgroundImage:
              "url(https://www.brachers.co.uk/wp-content/uploads/Agriculture-2017-scaled.jpg)",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-[700px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.allaboutfeed.net/app/uploads/2020/12/001_387_IMG_WAfarmsaleed.jpg)",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[450px] md:h-[550x] lg:h-[650px] xl:h-700px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.landthink.com/wp-content/uploads/buying-land-for-the-first-time-where-do-i-start.jpg)",
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
