import { Link } from "react-scroll";
import navbar from "../../assets/config/navbar";
import Logo from "../../assets/icon/Logo";
import "../../styles/navbar.css";
import Menu from "../../assets/icon/Hamburger";
import { useState } from "react";
import Xmark from "../../assets/icon/Xmark";

function Navbar() {
  const { website, menus } = { ...navbar };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-wrapper">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Xmark className="toggle-btn" />
          ) : (
            <Menu className="toggle-btn" />
          )}
        </button>
        <div className="logo-wrapper">
          <Logo className="logo" />
          <span>{website}</span>
        </div>
        <ul className={isOpen ? "open" : ""}>
          {menus.map((list) => {
            return (
              <li className={isOpen ? "block" : "hidden"} key={list.title}>
                <Link to={list.to} smooth spy duration={500} offset={-20}>
                  {list.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
