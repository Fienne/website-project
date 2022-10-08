import { Row, Col, Container, Card } from "react-bootstrap";
import "./WebAppDev.css";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

//import components
import RegButton from "../../Components/Button/RegButton";
import Testimonial from "../../Components/Testimonial/Testimonial";

const WebAppDev = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Data Girl - Web & App Development</title>
        <link
          rel="canonical"
          href="https://datagirl-website-git-master-fienne.vercel.app/web-and-app-development"
        />
        <meta
          name="description"
          content="Data Girl's home page. Showing the Web and App Development services they offer"
        />
        <meta property="og:title" content="Data Girl" />
      </Helmet>
      <Container>
        <Row>
          <div className="col-md-6">
            <br />
            <br />
            <br />
            <h1 className="mt-5 fw-bold web-heading">
              We build awesome apps and websites
            </h1>
            <p>
              We specialise in developing applications and outstanding websites.
            </p>
            <br />
            <Link to="/about-us">
              <RegButton title="Get Started" />
            </Link>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              style={{ width: "100%" }}
              src="./Images/Website setup-amico.png"
            />
          </div>
        </Row>
        <div className="d-flex justify-content-center">
          <h2 className="fw-bold">We create digital solutions</h2>
        </div>
        <div className="d-flex justify-content-center">
          <p>By making products that stand out from the crowd</p>
        </div>
        <br />
        <br />
        <div className="row">
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ height: "10rem" }}
              className="p-3 text-center seo-card"
            >
              <Card.Body>
                <h2
                  className="fw-bold"
                  style={{ color: "var(--primary-color)", fontSize: "40px" }}
                >
                  2.5m
                </h2>
                <br />
                <h4>
                  <b> Lines of code</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ height: "10rem" }}
              className="p-3 text-center seo-card"
            >
              <Card.Body>
                <h2
                  className="fw-bold"
                  style={{ color: "var(--primary-color)", fontSize: "40px" }}
                >
                  100+
                </h2>
                <br />
                <h4>
                  <b>Projects</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ height: "10rem" }}
              className="p-3 text-center seo-card"
            >
              <Card.Body>
                <h2
                  className="fw-bold"
                  style={{ color: "var(--primary-color)", fontSize: "40px" }}
                >
                  99.8%
                </h2>
                <br />
                <h4>
                  <b>Satisfaction</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ height: "10rem" }}
              className="p-3 text-center seo-card"
            >
              <Card.Body>
                <h2
                  className="fw-bold"
                  style={{ color: "var(--primary-color)", fontSize: "40px" }}
                >
                  80+
                </h2>
                <br />
                <h4>
                  <b>Happy Clients</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <Row className="mt-3">
          <div className="mt-5 col-md-6">
            <img src="./Images/img.jpg" className="img-fluid" />
          </div>
          <div className="mt-5 col-md-6 left-content">
            <h3 className="fw-bold">
              We are a digital agency specialized in building digital products
            </h3>
            <p className="left-p">
              We build web platforms, mobile apps, APIs, integrations, and fit
              them all into a beautiful-looking and high-performing system that
              helps you business thrive!
            </p>
            <Link to="contact-us">
              <button className="left-button"> Let's talk</button>
            </Link>
          </div>
        </Row>
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <h3 className="d-flex fw-bolder">
              Building websites to make your brand stand out from the noise
            </h3>
          </div>
          <div className="col-md-6">
            <p>
              We optimize your ability to sell online with our custom-crafted
              ecommerce solutions that are designed to help you succeed.
            </p>
          </div>
        </div>
        <Testimonial />
      </Container>
      <br />
      <br />
    </div>
  );
};

export default WebAppDev;
