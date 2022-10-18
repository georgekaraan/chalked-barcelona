import "./Header.css";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Navbar({ total }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <h1 className="h1-1">Chalked</h1>
      <div className="navburger">
        <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
      </div>
      <h1 className="h1-2">Chalked</h1>
      <nav className="navmenu">
        <NavLink
          style={(isActive) => (isActive ? styles.active : styles.default)}
          to={"/"}
          onClick={setOpen}
        >
          Home
        </NavLink>
        <NavLink
          style={(isActive) => (isActive ? styles.active : styles.default)}
          to={"/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          style={(isActive) => (isActive ? styles.active : styles.default)}
          to={"/custom"}
        >
          Custom
        </NavLink>
        <NavLink
          style={(isActive) => (isActive ? styles.active : styles.default)}
          to={"/corp"}
        >
          Corporate
        </NavLink>
        <NavLink
          style={(isActive) => (isActive ? styles.active : styles.default)}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </nav>
      <NavLink className="cart-head" to={"/cart"}>
        Cart ({total})
      </NavLink>
    </header>
  );
}

export default Navbar;

const styles = {
  active: {},
  default: {
    textDecoration: "none",
    color: "pink",
  },
};
