import { NavLink } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <nav className="nav-links">
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
    </nav>
  );
};

export default Navigation;
