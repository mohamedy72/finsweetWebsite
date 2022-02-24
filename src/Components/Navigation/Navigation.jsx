import { NavLink } from "react-router-dom";
import { BorderedButton } from "../Buttons/Button";
import "./navigation.css";
export const Navigation = ({ className, buttonLocation }) => {
  return (
    <nav className={className}>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="aboutus" className="nav-item">
        About us
      </NavLink>
      <NavLink to="features" className="nav-item">
        Features
      </NavLink>
      <NavLink to="pricing" className="nav-item">
        Pricing
      </NavLink>
      <NavLink to="faq" className="nav-item">
        FAQ
      </NavLink>
      <NavLink to="blog" className="nav-item">
        Blog
      </NavLink>
      <BorderedButton text="contact us" buttonLocation={buttonLocation} />
    </nav>
  );
};

export default Navigation;
