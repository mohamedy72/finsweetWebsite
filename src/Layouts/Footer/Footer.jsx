import Logo from "../../Components/Logo";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Header from "../../Components/Header/Header";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="left">
          <Logo />
          <p className="paragraph">
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className="footer_contact">
            <div className="email">
              <h5>Email me at</h5>
              <small className="small">contact@website.com</small>
            </div>
            <div className="phone">
              <h5>Call us</h5>
              <small className="small">0927-6277-28525</small>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="right_header">Lets Talk</h3>
          <p className="paragraph">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="social-icons">
            <BsFacebook fill="white" className="social" />
            <BsTwitter fill="white" className="social" />
            <BsInstagram fill="white" className="social" />
            <BsLinkedin fill="white" className="social" />
          </div>
        </div>
      </div>
      <Header text="copyright" />
    </footer>
  );
};

export default Footer;
