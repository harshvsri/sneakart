import { Link } from "react-router-dom";

function Navbar() {
  const navItems = ["Home", "Shop", "About", "Checkout", "Login"];

  return (
    <>
      <ul className="navBar">
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
