//import packages
import { Link } from "react-router-dom";

//import Styles
import "./AboutUs.css";
import { Container } from "react-bootstrap";

//import components
import FAQ from "../../Components/FAQ/FAQ";

const AboutUs = () => {
  return (
    <div>
      <div
        style={{ height: "200px", background: "var(--primary-color)" }}
        className="contact-header"
      >
        <h2 className="contact-heading">
          <b>About Us</b>
        </h2>
      </div>
      <br />
      <Container>
        <div className="row about-content">
          <div className="col-lg-6">
            <h3>
              <b>
                Building websites to make your brand stand out from the noise
              </b>
            </h3>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12">
            <p>
              At DataGirl Technologies, we prioritize brands to understand
              behavior, solve complex challendes and create mutually beneficial
              experiences.
            </p>
          </div>
        </div>
        <hr />
        <br />
        <section className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <h2>
                <b>
                  We create smart products, web, branding, and mobile solutions
                </b>
              </h2>
              <br />
              <h5>
                <b>Every interaction with a user is an opportunity</b>
              </h5>
              <br />
              <p>
                Our approach is a focus on what matters. Working as one unified
                team towards your objectives. <br /> From digital transformation
                to incremental improvement, we navigate the complexities of
                delivering great digital products. We offer a depth of knowledge
                and experience to identify, diagnose and solve your biggest
                challenges and unlock untapped opportunities.
              </p>
              <Link to="/contact">
                <button className="mt-3" style={{ width: "150px" }}>
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-6 parent">
                 <img src="./Images/dg_img.jpg" alt="DataGirl-Image" className="image1 img-fluid"/>
                <img src="./Images/Dg_img.jpg" alt="DataGirl-Image" className="image2 img-fluid"/>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
