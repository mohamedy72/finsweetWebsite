import { useState } from "react";
import "./hamburger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Navigation from "../Navigation/Navigation";
const Hamburger = ({ className, fill, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenHamburger = () => {
    setIsOpen(true);
  };

  const handleClosingHamburger = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger">
      {isOpen ? (
        <AiOutlineClose
          fill={fill}
          fontSize={size}
          className="icon"
          onClick={handleClosingHamburger}
        />
      ) : (
        <GiHamburgerMenu
          fill={fill}
          fontSize={size}
          onClick={handleOpenHamburger}
          className="icon"
        />
      )}
      {isOpen && (
        <Navigation
          className={`${className} ${isOpen ? "open" : "close"} `}
          buttonLocation="mobile"
        />
      )}
    </div>
  );
};

export default Hamburger;
