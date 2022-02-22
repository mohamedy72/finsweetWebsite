import "./button.css";

export const BorderedButton = ({ text }) => {
  return (
    <button type="button" className="btn bordered-btn">
      {text}
    </button>
  );
};
export const MainButton = () => {
  return (
    <button type="button" className=" btn main-btn">
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
