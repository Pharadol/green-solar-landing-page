import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "../../styles/common/swiperContainer.css";
import SwiperNavButton from "./SwiperNavButton";

function SwiperContainer({ items }) {
  return (
    <>
      <Swiper spaceBetween={12} slidesPerView={"auto"}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
        <SwiperNavButton />
      </Swiper>
    </>
  );
}

export default SwiperContainer;
SwiperContainer.propTypes = {
  items: PropTypes.array,
};
