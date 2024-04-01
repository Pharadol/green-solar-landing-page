import footer from "../../assets/config/footer";
import "../../styles/footer.css";
import Container from "../common/Container";
function Footer() {
  return (
    <footer>
      <Container>
        <div className="info_wrapper">
          {footer.info.map((column, index) => (
            <div key={index}>
              <h3>{column.title}</h3>
              <ul>
                {column.list.map((item) => (
                  <li key={item}>
                    <a href="#" onClick={(e) => e.preventDefault()}>{item}</a>
                  </li>
                ))} 
              </ul>
            </div>
          ))}
        </div>
        <hr />
        <p className="copyRight">{footer.copyRight}</p>
      </Container>
    </footer>
  );
}

export default Footer;
