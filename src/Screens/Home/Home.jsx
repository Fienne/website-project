import { Container, Col, Row, Card, CardGroup } from "react-bootstrap";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

//import components
import RegButton from "../../Components/Button/RegButton";
import Navigation from "../../Components/Navbar/Navigate";
import Image from "../../Components/Image/Image";
import ReadMore from "../../Components/ReadMore/ReadMore.component";
import ExpendableText from "../../Components/ReadMore/ReadMore.component";
import CardComponent from "../../Components/Card/Card.components";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Ratings from "../../Components/Ratings/Ratings";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="">
      <Carousel className="carousel">
        <Carousel.Item className="hero-carousel">
          <img
            className="d-block w-100 img-fluid"
            src="./Images/dg_img.png"
            alt="First slide"
          />
          <Carousel.Caption className="hero-carousel-1 h-100 d-flex align-items-center justify-content-center carousel-1">
            <div data-aos="fade-up">
              <h3 className="my-auto text-center hero-heading">
                Center for ICT <br /> and computer training in <br /> Cameroon
              </h3>
              <Link to="/about-us">
                <button className="d-block hero-button-1">About us</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="no-carousel">
          <img
            className="d-block w-100 img-fluid"
            src="./Images/Datagirl-mock-up.png"
            alt="Second slide"
          />

          <Carousel.Caption className="hero-carousel-1 h-100 d-flex align-items-end justify-content-center">
            <h3
              className="hero-heading hero-heading-2"
              style={{ color: "var(--primary-color)" }}
            >
              A Full Service Digital Agency in Cameroon
            </h3>
            <div className="header-button">
              <Link to="/about-us" className="text-center ">
                <button className="fw-bold hero-button">Get Started</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="no-carousel">
          <img
            className="d-block w-100 img-fluid"
            src="./Images/Datagirl-laptop.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="hero-carousel-1 h-100 align-items-center justify-content-center carousel-1">
            <div data-aos="fade-up">
              <h3
                data-aos="fade-up"
                className="my-auto text-center hero-heading"
                style={{ color: "var(--primary-color)" }}
              >
                Web and Mobile Development
              </h3>
              <div className="header-button">
                <Link to="/about-us" className="text-center ">
                  <button className="fw-bold hero-button">Get Started</button>
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="phone-hero">
        <img
          className="d-block w-100 img-fluid"
          src="./Images/dg_img.png"
          alt="First slide"
        />
        <h3 className="my-auto text-center phone-heading">
          Center for ICT <br /> and computer training in <br /> Cameroon
        </h3>
        <Link to="/about-us">
          <button className="d-block hero-button phone-button">
            Get Started
          </button>
        </Link>
      </div>
      <Container>
        <div className="middle-content" data-aos="zoom-in">
          <h2 className="d-flex justify-content-center text-center fw-bolder brand-text">
            A brand agency for ambitious young businesses
          </h2>
          <div className="d-flex justify-content-center">
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
          </div>
          <p className="p-center">
            We believe scaling startups require a radically different kind of
            agency. Our lean, flexible approach is designed to help the
            businesses of tomorrow move forward, fast.
          </p>
        </div>

        <div className="row center-content mt-5">
          <div className="col-md-6 parent-div">
            <img
              data-aos="fade-right"
              src="./Images/one.jpg"
              alt="DataGirl-Image"
              className="image1-div img-fluid"
            />
            <img
              data-aos="fade-left"
              src="./Images/two.jpg"
              alt="DataGirl-Image"
              className="image2-div img-fluid"
            />

            <img
              data-aos="fade-up"
              src="./Images/three.jpg"
              alt="DataGirl-Image"
              className="image3-div img-fluid bounce-3"
            />
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <h3 className="fw-bold">
              Our goal is to create unique and digital experiences
            </h3>
            <p>
              We partner with founders committed to disrupting categories and
              sparking change. Tailoring our approach around their ambitions,
              not ours.
            </p>

            <h4 className="fw-bold">Branding and design consulting</h4>
            <p>
              Prioritizing brands to understand behavior, solve complex
              challenges, and create mutually beneficial experiences.
            </p>

            <h4 className="fw-bold">Customer experience strategy</h4>
            <p>
              Keeping clients and new customers continually engaged through
              carefully crafted and customized emails.
            </p>
          </div>
        </div>
        <div className="row">
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
        <div className="row mt-5" data-aos="fade-up">
          <Col lg={3} md={6} sm={12}>
            <Container>
              <Card
                className="text-center seo-card shadow"
                style={{ background: "#FFE7D3" }}
              >
                <Card.Body>
                  <img src="./Images/bulb.png" />
                  <h3 className="card-title fw-bold mt-3">Branding</h3>
                  <hr />
                  <Card.Text>
                    We help you from design to production for all your websites
                    and applications
                  </Card.Text>
                </Card.Body>
                <Link to="/about-us">
                  <a
                    href="#"
                    className="card-link fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Learn more
                  </a>
                </Link>
              </Card>
            </Container>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Container>
              <Card
                className="text-center seo-card shadow mt-3"
                style={{ background: "#FFDDEB" }}
              >
                <Card.Body>
                  <img src="./Images/campaign.png" />
                  <h3 className="card-title fw-bold mt-3">Campaign</h3>
                  <hr />
                  <Card.Text>
                    We help you digital campaigns particularly tailored to meet
                    client needs and create more leads.
                  </Card.Text>
                </Card.Body>
                <Link to="/about-us">
                  <a
                    href="#"
                    className="card-link fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Learn more
                  </a>
                </Link>
              </Card>
            </Container>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Container>
              <Card
                className="text-center seo-card shadow mt-3"
                style={{ background: "#DEFFCC" }}
              >
                <Card.Body>
                  <img src="./Images/ux-design.png" />
                  <h3 className="card-title fw-bold mt-3">UX Design</h3>
                  <hr />
                  <Card.Text>
                    We carefully craft beautiful user interfaces that makes your
                    application easy to interact with.
                  </Card.Text>
                </Card.Body>
                <Link to="/about-us">
                  <a
                    href="#"
                    className="card-link fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Learn more
                  </a>
                </Link>
              </Card>
            </Container>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Container>
              <Card
                className="text-center seo-card shadow mt-3"
                style={{ background: "#CEDFFE" }}
              >
                <Card.Body>
                  <img src="./Images/mailing.png" />
                  <h3 className="card-title fw-bold mt-3">UX Design</h3>
                  <hr />
                  <Card.Text>
                    We customize your emailing system, creating content that
                    will keep your customers engaged
                  </Card.Text>
                </Card.Body>
                <Link to="/about-us">
                  <a
                    href="#"
                    className="card-link fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Learn more
                  </a>
                </Link>
              </Card>
            </Container>
          </Col>
        </div>
      </Container>
      <div className="row mt-5" style={{ background: "#EEF4FB" }}>
        <div className="col-md-6 mt-5 first-content">
          <h3 className="fw-bold">
            Creating unique and digital experiences for your business and your
            needs
          </h3>
          <p className="mt-3">
            We are a cameroon-based award-winning digital agency that
            specializes in developing stunning websites.
          </p>
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="fw-bold">100%</h1>
              <h4 className="fw-bold">Satisfaction rate</h4>
              <img src="./Images/Star.png" alt="rating star" />
            </div>
            <div className="col-md-6 ">
              <h1 className="fw-bold">4.9/5.0</h1>
              <h4 className="fw-bold">Average ratings</h4>
              <img src="./Images/Star.png" alt="rating star" />
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="./Images/talking.jpeg"
            className="img-fluid w-100v talking-img"
          />
        </div>
      </div>

      <Container>
        <h2 className="d-flex justify-content-center text-center fw-bolder brand-text test-heading">
          Helping brands win today and grow tomorrow. We have been featured on:
        </h2>
        <div className="d-flex justify-content-center">
          <span className="text-center dot"></span>&nbsp;&nbsp;
          <span className="text-center dot"></span>&nbsp;&nbsp;
          <span className="text-center dot"></span>&nbsp;&nbsp;
          <span className="text-center dot"></span>&nbsp;&nbsp;
        </div>

        <div className="row featured ">
          <div className="col-md-4">
            <img className="img-fluid featured-img" src="./Images/forbes.png" />
          </div>
          <div className="col-md-4">
            <img className="img-fluid featured-img" src="./Images/biz.png" />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid featured-img"
              src="./Images/disrupt.png"
            />
          </div>
        </div>
        <Row className="mt-3">
          <div className="mt-5 col-md-6">
            <img
              src="./Images/img.jpg"
              className="img-fluid"
              data-aos="fade-right"
            />
          </div>
          <div className="mt-5 col-md-6 left-content">
            <h3 className="fw-bold">
              Like what you see with our online products and marketing projects?
            </h3>
            <p className="left-p">
              We were hoping you would. We look forward to getting to know you
              and helping your business to be the best it can be by getting your
              brand out there.
            </p>
            <Link to="contact-us">
              <button className="left-button"> Let's talk</button>
            </Link>
          </div>
        </Row>
      </Container>

      <Container>
        <h3 className="mt-5 fw-bold text-center test-heading">
          See what our clients say about us and how we can help your company and
          team, too
        </h3>
        <Testimonial />
      </Container>
    </div>
  );
};

export default Home;
