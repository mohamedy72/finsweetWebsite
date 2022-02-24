import "./button.css";

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

