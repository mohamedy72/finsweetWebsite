import "./header.css";
import logo from "../../Assets/images/logo.png";
import Navigation from "../Navigation/Navigation";
import { BorderedButton } from "../Buttons/Button";
import { Outlet } from "react-router-dom";

const Header = ({ background, text }) => {
  return (
    <>
      <header className="header" style={{ background: { background } }}>
        <div className="logo">
          {text || <img src={logo} alt="finsweet Logo " />}
        </div>
        <Navigation />
        <BorderedButton text="contact us" />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
