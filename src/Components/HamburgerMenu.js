import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

export default function HamburgerMenu({ isOpen, setOpen }) {
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <ul className="navburgeritems" onClick={() => setOpen(false)}>
          <li className="itemham">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="itemham">
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li className="itemham">
            <NavLink to={"/custom"}>Custom</NavLink>
          </li>
          <li className="itemham">
            <NavLink to={"/corp"}>Corporate</NavLink>
          </li>
          <li className="itemham">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      )}
    </>
  );
}
