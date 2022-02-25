import "./about.css";
import Wrapper from "../../Components/Wrapper";
import { AnchoredButton } from "../../Components/Buttons/Button";
import NumericBox from "../../Components/UI Elements/NumericBox";

const About = () => {
  return (
    <section className="about">
      <Wrapper>
        <div className="left-part">
          <h2 className="about-heading">How we work</h2>
          <p className="about-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <AnchoredButton
            label="Get in touch with us"
            fill="var(--royal-blue)"
          />
        </div>
        <div className="right-part">
          <div className="feature">
            <NumericBox number="01" />
            <h3 className="feature-head">Strategy</h3>
            <p className="feature-body">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="feature">
            <NumericBox number="02" />
            <h3 className="feature-head">Wireframing</h3>
            <p className="feature-body">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="feature">
            <NumericBox number="03" />
            <h3 className="feature-head">Design</h3>
            <p className="feature-body">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="feature">
            <NumericBox number="04" />
            <h3 className="feature-head">Development</h3>
            <p className="feature-body">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
