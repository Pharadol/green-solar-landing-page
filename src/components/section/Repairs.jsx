import { repairs } from "../../assets/config/infoSection";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Text from "../common/Text";
import '../../styles/section/reapairs.css'

function Repairs() {
  return (
    <section id="repairs" style={{backgroundImage: `url(${repairs.bg})`}}>
      <Container>
        <div className="content_wrapper">
          <SectionHeading>{repairs.title}</SectionHeading>
          <Text>{repairs.detail}</Text>
        </div>
      </Container>
    </section>
  );
}

export default Repairs;
