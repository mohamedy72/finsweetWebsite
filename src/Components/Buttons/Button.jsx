import "./button.css";
import { BsArrowRight } from "react-icons/bs";

export const BorderedButton = ({ text, buttonLocation }) => {
  return (
    <button type="button" className={`${buttonLocation} btn bordered-btn`}>
      {text}
    </button>
  );
};
export const MainButton = ({ text }) => {
  return (
    <button type="button" className="btn main-btn">
      {text}
    </button>
  );
};
export const SecondaryButton = () => {
  return (
    <button type="button" className=" btn secondary-btn">
      {text}
    </button>
  );
};

export const AnchoredButton = ({ label, fill }) => {
  return (
    <button className="anchored-btn">
      <a className="anchor" href="#">
        {label}
      </a>
      <BsArrowRight className="right-arrow" fill={fill} />
    </button>
  );
};
