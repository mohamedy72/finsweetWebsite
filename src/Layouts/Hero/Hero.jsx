import { AnchoredButton, MainButton } from "../../Components/Buttons/Button";
import "./hero.css";
import hero from "../../Assets/images/hero.svg";
import Wrapper from "../../Components/Wrapper";
const Hero = () => {
  return (
    <section className="hero">
      <Wrapper>
        <div className="left">
          <h1 className="main-heading">
            Building stellar websites for early startups
          </h1>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="main-btns">
            <MainButton text="View our work" />
            <AnchoredButton label="View Pricing" fill="var(--white)" />
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="Illustration of the website workflow" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
