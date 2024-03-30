import Container from "../common/Container";
import { header } from "../../assets/config/infoSection";
import "../../styles/section/solar.css"
import Button from "../common/Button";

function Solar() {
  return (
    <header id="solar" style={{backgroundImage: `url(${header.bg})`}}>
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: header.title }}></h1>
        <p>{header.detail}</p>
        <div className="group-btn">
          <Button to={header.btn1.to} title={header.btn1.title} />
          <Button to={header.btn2.to} title={header.btn2.title}/>          
        </div>
      </Container>
    </header>
  );
}

export default Solar;
