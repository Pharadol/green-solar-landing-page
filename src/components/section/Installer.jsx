import { installer } from "../../assets/config/infoSection";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Text from "../common/Text";
import '../../styles/section/installer.css'

function Installer() {
  return (
    <section id="installer">
      <Container>
        <div className="content_wrapper">
          <SectionHeading>{installer.title}</SectionHeading>
          <Text>{installer.detail}</Text>
          <ul>
            {installer.lists.map((item, index) => (
              <li key={index}><span>{ index+1 }</span>{item}</li>
            ))}
          </ul>
        </div>
        <img src={installer.img} alt="solar-pannel-on-green-earth" />
      </Container>
    </section>
  );
}

export default Installer;
