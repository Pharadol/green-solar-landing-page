import { useSwiper } from "swiper/react"
import ChevronLeft from "../../assets/icon/ChevronRight"
import ChevronRight from "../../assets/icon/ChevronLeft"
import "../../styles/common/swiperNavButton.css"

function SwiperNavButton() {
  const swiper = useSwiper()
  return (
    <div className="swiper-nav-btn">
      <button onClick={() => swiper.slidePrev()} ><ChevronLeft className={"arrow"}/></button>
      <button onClick={() => swiper.slideNext()} ><ChevronRight className={"arrow"}/></button>
    </div>
  )
}

export default SwiperNavButton
