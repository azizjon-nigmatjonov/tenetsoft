import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { useRef } from "react";

interface Props {
  type?: string;
  clickable?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  swiperList: any;
  onSlideChange?: (val: any) => void;
}

export const SwiperWrapper = ({
  clickable = true,
  slidesPerView = 1,
  spaceBetween = 30,
  swiperList = [],
  onSlideChange = () => {},
}: Props) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1030: {
      slidesPerView: slidesPerView,
    },
  };

  // const progressCircle: any = useRef(null);
  // const progressContent: any = useRef(null);
  // const onAutoplayTimeLeft = (_: any, time: any, progress: any) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <Swiper
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      onSlideChange={(e) => {
        onSlideChange(e?.activeIndex + 1);
      }}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: clickable,
        dynamicBullets: false,
      }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="SwiperWrapper relative"
    >
      {swiperList?.map((item: any, ind: number) => (
        <SwiperSlide key={ind}>
          <div className="rounded-[18px]">
            {item.image?.length ? (
              <div>
                <img
                  className="w-full h-full object-cover rounded-[18px]"
                  src={item.image}
                  alt={item.name + " image"}
                />
              </div>
            ) : (
              <div className="h-[300px] w-full card-shadow"></div>
            )}
            {/* <h3 className="text-xl font-bold mt-5 absolute bottom-3 left-3">
              {item.name}
            </h3> */}
            {/* <p className="font-bold text-[var(--primary)] mt-2">{item.role}</p> */}
          </div>
        </SwiperSlide>
      ))}
      {/* <div className="autoplay-progress absolute bottom-0" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */}
    </Swiper>
  );
};
