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

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="">
      {/* <header>
        <img
          src="./Images/setup.png"
          alt="Five developers at work."
          className="hero-image img-fluid"
        />
        <section class="centered">
          <h1 style={{fontSize:"55px"}}>
            Fostering the next generation of female tech talents in Africa
          </h1>
          <span className="hero-text">
            We are an EdTech startup based in Cameroon. We train girls/women how
            to code, and link them up with oppportunities in the tech sector
          </span>
          <br />
          <Link to="/about-us">
            <RegButton title="About Us" />
          </Link>
        </section>
      </header> */}

      <Carousel>
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
                <button className="d-block">Get Started</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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
                <button
                  style={{
                    borderRadius: "40px",
                    height: "50px",
                    width: "170px",
                    background: "white",
                    color: "var(--primary-color)",
                  }}
                  className="fw-bold"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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
                  <button
                    style={{
                      borderRadius: "40px",
                      height: "50px",
                      width: "170px",
                      background: "white",
                      color: "var(--primary-color)",
                    }}
                    className="fw-bold"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="middle-content">
          <h2 className="d-flex justify-content-center fw-bolder brand-text">
            A brand agency for ambitious young businesses
          </h2>
          <div className="d-flex justify-content-center">
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
          </div>
          <p className="text-center">
            We believe scaling startups require a radically different kind of
            agency. Our lean, flexible approach is designed to help the
            businesses of tomorrow move forward, fast.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 parent">
            <img
              src="./Images/one.jpg"
              alt="DataGirl-Image"
              className="image1 img-fluid"
            />
            <img
              src="./Images/two.jpg"
              alt="DataGirl-Image"
              className="image2 img-fluid"
            />

            <img
              src="./Images/three.jpg"
              alt="DataGirl-Image"
              className="image3 img-fluid"
            />
          </div>
          <div className="col-md-6"></div>
        </div>
        {/* <Row className="mt-3">
          <div className="mt-5 col-md-6">
            <img
              src="./Images/female-code.jpg"
              className="img-left img-fluid"
            />
          </div>
          <div className="mt-5 col-md-6">
            <h4 style={{ color: "#E60168"}} className="fw-bold">
              WE GIVE YOU THE BEST IT TRAINING COURSES IN CAMEROON
            </h4>
            <p>
              If you are looking for a computer training school in Buea,
              Cameroon that will give you practical hands-on training and make
              sure you learn digital skills that you can leverage on, then you
              are in the right computer training school. Data Girl Technologies
              provides quality and practical ICT and Computer training that is
              second to none.
            </p>
          </div>
        </Row> */}
        <h2 className="mt-5">See what our students have to say about us</h2>
        <Testimonial />
      </Container>
    </div>
  );
};

export default Home;
