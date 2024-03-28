import { Link } from "react-scroll";
import { menus } from "../../assets/config/navbar";

function Navbar() {
  return (
    <nav>
      <ul>
        {menus.map((list) => {
          return (
            <li key={list.title}>
              <Link to={list.to} smooth spy duration={500} offset={-70}>
                {list.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
