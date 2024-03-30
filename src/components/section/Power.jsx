import { power } from "../../assets/config/infoSection"
import Container from "../common/Container"
import Text from "../common/Text"
import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button"
import '../../styles/section/power.css'

function Power() {
  return (
    <section id="power" style={{backgroundImage: `url(${power.bg})`}}>
      <Container>
        <SectionHeading>
        {power.title}
        </SectionHeading>
        <Text>{power.detail}</Text>
        <Button title={power.btn.title} to={power.btn.to}/>
      </Container>
    </section>
  )
}

export default Power
