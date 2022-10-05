import { Container, Col, Row, Card, CardGroup } from "react-bootstrap";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import { Link } from "react-router-dom";

//import components
import RegButton from "../../Components/Button/RegButton";
import Navigation from "../../Components/Navbar/Navigate";
import Image from "../../Components/Image/Image";
import ReadMore from "../../Components/ReadMore/ReadMore.component";
import ExpendableText from "../../Components/ReadMore/ReadMore.component";
import CardComponent from "../../Components/Card/Card.components";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <header>
        <img
          src="./Images/setup.png"
          alt="Five developers at work."
          className="hero-image img-fluid"
        />
        <section class="centered">
          <h1>
            Fostering the next generation of female tech talents in Africa
          </h1>
          <span className="hero-text">
            We are an EdTech startup based in Cameroon. We train girls/women how
            to code, and link them up with oppportunities in the tech sector
          </span>
          <br />
          <Link to="/aboutUs">
            <RegButton title="About Us" />
          </Link>
        </section>
      </header>
      <Container>
        <div className="">
          <h4 className="d-flex justify-content-center"></h4>
          {/* <p>
            If you are looking for a computer training school in Buea, Cameroon
            that will give you practical hands-on training and make sure you
            learn digital skills that you can leverage on, then you are in the
            right computer training school. Data Girl Technologies provides
            quality and practical ICT and Computer training that is second to
            none.
          </p> */}
        </div>
        <Row className="mt-5">
          <Col className="mt-5">
            <img src="./Images/female-code.jpg" className="img-left img-fluid" />
          </Col>
          <Col className="mt-5">
            <h4 style={{ color: "#E60168" }}>
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
          </Col>
        </Row>


        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h3> We Love What we do and who we do it for</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            Our Practical one on one personalized training has set us as one of
            the best Computer training institutes in Cameroon
          </p>
        </div>
        <hr />
        <div>
          <br />
          <br />
          <Row>
            <Col lg={4} md={12}>
              <h3>Crafting effective digital marketing and UX design</h3>
              <p>
                As the best, IT training center in Cameroon our IT training
                courses are practical hands-on training where you learn IT
                skills that are in high demand from the beginning to advanced
                even if you have not touched a computer before.
                <br />
                <br />
                The world of information technology IT is growing rapidly, and
                in the years to come in this digital age, we are going to see
                even more of a demand for IT skills and IT-related jobs. We all
                have started seeing the dramatic impact information technology
                is having on the business world. Everything now revolves around
                Information technology. Many people fear losing their jobs to
                machines and technology, but the exciting component of this
                transition is that it will create new jobs in the process.
                <br />
                <br />
                What this means is that those who enroll in IT training courses
                and learn practical IT skills will have a better chance of being
                employed. Our IT training center in Cameroon is positioned with
                the state of the art IT training equipment.
              </p>

              <RegButton title="Register Now" />
              <br />
              <br />
              <br />
              <br />
            </Col>
            <br />
            <br />
            <Col lg={8} md={12} className="d-flex justify-content-center">
              <img src="./Images/dg3.jpeg" />
            </Col>
          </Row>
          <h2 className="mt-5">See what our students have to say about us</h2>
          <Testimonial />
        </div>
      </Container>
    </div>
  );
};

export default Home;
