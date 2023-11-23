import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "./SwiperShow.module.scss";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

const SwiperShow = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <div className={`${classes.eachSlide} ${classes.first}`}>
          <h4>Quality guaranteed</h4>
          <h1>Leading Solar Panels in the Industry</h1>
          <div>
            <button>Discover More</button>
            <button>Our Service</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${classes.eachSlide} ${classes.second}`}>
          <h4>Saving Money</h4>
          <h1>Renewable Energy for your Home</h1>
          <div>
            <button>Discover More</button>
            <button>Our Service</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperShow;
