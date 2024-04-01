import { solarKits } from "../../assets/config/infoSection";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SwiperContainer from "../common/SwiperContainer";
import Text from "../common/Text";
import "../../styles/section/solarKites.css";

function SolarKits() {
  const cards = solarKits.cards.map((item, index) => (
    <article key={index}>
      <img src={item.img} alt="" />
      <div>
        <h3>{item.title}</h3>
        <Text>{item.detail}</Text>
      </div>
    </article>
  ));
  return (
    <section id="solar-kits">
      <Container>
        <div className="title-section-wrapper">
          <SectionHeading>{solarKits.title}</SectionHeading>
          <Text>{solarKits.detail}</Text>
        </div>
        <SwiperContainer items={cards}></SwiperContainer>
      </Container>
    </section>
  );
}

export default SolarKits;
