import "./Header.css";
import Hamburger from "./HamburgerMenu";

function Header() {
  return (
    <>
      <header>
        <h1>Chalked</h1>
        <nav>
          <a href="#home">Home</a>
          <a className="active" href="#shop">
            Shop
          </a>
          <a href="#custom">Custom</a>
          <a href="#corporate">Corporate</a>
          <a href="contact">Contact</a>
        </nav>
        <a className="cart-head" href="cart">
          Cart (0)
        </a>
      </header>
    </>
  );
}

export default Header;
