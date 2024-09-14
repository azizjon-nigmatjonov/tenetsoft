import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  slidesPerView = 3,
  spaceBetween = 32,
  swiperList = [],
  onSlideChange = () => {},
}: Props) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1030: {
      slidesPerView: slidesPerView,
    },
  };
  return (
    <Swiper
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      onSlideChange={(e) => {
        onSlideChange(e?.activeIndex + 1);
      }}
      pagination={{
        clickable: clickable,
        dynamicBullets: true,
      }}
      //   modules={[Pagination]}
      className={`SwiperWrapper`}
    >
      {swiperList?.map((item: any, ind: number) => (
        <SwiperSlide key={ind}>
          <div className="p-4 rounded-[8px] border">
            {item.image?.length ? (
              <div className="h-[300px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name + " image"}
                />
              </div>
            ) : (
              <div className="h-[300px] w-full card-shadow"></div>
            )}
            <h3 className="text-xl font-bold mt-5">{item.name}</h3>
            {/* <p className="font-bold text-[var(--primary)] mt-2">{item.role}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
