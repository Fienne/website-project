//import packages
import { Link } from "react-router-dom";

//import helmet
import { Helmet } from "react-helmet";

//import Styles
import "./AboutUs.css";
import { Container } from "react-bootstrap";

//import components
import FAQ from "../../Components/FAQ/FAQ";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Testimonial from "../../Components/Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Data Girl - About Us</title>
        <link
          rel="canonical"
          href="https://datagirl-website-git-master-fienne.vercel.app/about-us"
        />
        <meta
          name="description"
          content="Data Girl's about us page. Showing the services they offer"
        />
        <meta property="og:title" content="Data Girl" />
      </Helmet>
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
        <hr className="hr" />
        <br />
        <section className="mb-4">
          <div className="row">
            <div className="col-md-6 about-div">
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
            <div className="col-md-6 parent d-lg-none d-xl-block div-images">
              <img
                src="./Images/image.jpg"
                alt="DataGirl-Image"
                className="image1 img-fluid"
              />
              <img
                src="./Images/Dg_img.jpg"
                alt="DataGirl-Image"
                className="image2 img-fluid"
              />
            </div>
          </div>
          <div>
            <h3 className="text-center fw-bold">
              See what our clients say about us and how we can help your company
              and team, too
            </h3>
            <Testimonial />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
