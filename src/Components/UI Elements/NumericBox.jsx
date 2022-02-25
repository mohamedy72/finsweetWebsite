import "./ui.css";

const NumericBox = ({ number }) => {
  return (
    <div className="num-box">
      <span className="text">{number}</span>{" "}
    </div>
  );
};

export default NumericBox;
