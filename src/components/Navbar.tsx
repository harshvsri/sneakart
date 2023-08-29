import { Link } from "react-router-dom";
import { navItems } from "../data/Data";

function Navbar() {
  return (
    <>
      <ul className="navBar navbar sticky-top">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="navLink"
              to={item == "Home" ? "/" : `${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
