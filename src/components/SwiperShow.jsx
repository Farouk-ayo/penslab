import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import classes from "./SwiperShow.module.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
} from "swiper/modules";

const SwiperShow = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{ crossFade: true, speed: 1000 }} // Set the speed of the fade effect (in milliseconds)
      autoplay={{ delay: 9000 }}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        clickable: true,
      }}
      loop="true"
    >
      <SwiperSlide>
        <div className={`${classes.eachSlide} ${classes.first}`}>
          <img
            src="//geya.axiomthemes.com/wp-content/uploads/revslider/slider/slider_1-1-copyright1.png"
            alt=""
          />
          <div className={classes.content}>
            <h4>Quality guaranteed</h4>
            <h1>Leading Solar Panels in the Industry</h1>
            <div className={classes.btn}>
              <button>Discover More</button>
              <button>Our Service</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${classes.eachSlide} ${classes.second}`}>
          <img
            src="//geya.axiomthemes.com/wp-content/uploads/revslider/slider/slider_1-2-copyright1.png"
            alt=""
          />
          <div className={classes.content}>
            <h4>Saving Money</h4>
            <h1>Renewable Energy for your Home</h1>
            <div className={classes.btn}>
              <button>Discover More</button>
              <button>Our Service</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperShow;
