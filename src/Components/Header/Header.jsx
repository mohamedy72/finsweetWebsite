import "./header.css";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import Hamburger from "../Hamburger/Hamburger";
import Wrapper from "../Wrapper";

const Header = ({ text }) => {
  return (
    <>
      <header className="header">
        <Wrapper>
          <div className="logo">{text || <Logo />}</div>
          <Hamburger className="mobile-nav nav" fill="white" size="2rem" />
          <Navigation className="desktop-nav nav" buttonLocation="desktop" />
        </Wrapper>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
