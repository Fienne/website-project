import { Row, Col, Container, Card } from "react-bootstrap";
import "./WebAppDev.css";
import { Link } from "react-router-dom";
import $ from "jquery";

//import components
import RegButton from "../../Components/Button/RegButton";

const WebAppDev = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-lg-6 col-sm-12">
            <br />
            <br />
            <br />
            <h1 className="mt-5">We build awesome apps and websites</h1>
            <p>
              We specialise in developing applications and outstanding websites.
            </p>
            <br />
            <Link to="/about-us">
              <RegButton title="Get Started" />
            </Link>
          </Col>
          <Col className="col-lg-6 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="./Images/Website setup-amico.png"
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <h1>We create digital solutions</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p>By making products that stand out from the crowd</p>
        </div>
        <br />
        <br />
        <Row>
          <Col>
            <Card style={{ height: "10rem" }} className="p-3 text-center">
              <Card.Body>
                <h3>2.5m</h3>
                <br />
                <h4>
                  <b> Lines of code</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "10rem" }} className="p-3 text-center">
              <Card.Body>
                <h3>100+</h3>
                <br />
                <h4>
                  <b>Projects</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "10rem" }} className="p-3 text-center">
              <Card.Body>
                <h3>99.8%</h3>
                <br />
                <h4>
                  <b>Satisfaction</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "10rem" }} className="p-3 text-center">
              <Card.Body>
                <h3>80+</h3>
                <br />
                <h4>
                  <b>Happy Clients</b>
                </h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="col-lg-6 col-sm-12">
            <img
              className="web-image"
              style={{ width: "100%" }}
              src="./Images/Datagirl-laptop.jpg"
            />
          </Col>
          <Col className="col-lg-6 col-sm-12">
            <br />
            <br />
            <br />
            <h3 style={{ color: "var(--primary-color)" }}>
              We are a digital agency specialized in building digital products
            </h3>
            <p>
              We build web platforms, mobile apps, APIs, integrations, and fit
              them all into a beautiful-looking and high-performing system that
              helps you business thrive!
            </p>
            <br />
            <Link to="/about-us">
              <RegButton title="About Us" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div className="w3-light-grey">
              <div className="w3-grey" style={{height:"24px", width:"25%", color:"black"}}></div>
            </div> */}
            <ul className="list-unstyled card-body mb-0 pb-0">
              <li className="row mb-3">
                <div>Development</div>
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                  <div className="progress" style={{height: "10px"}}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: "90%"}}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default WebAppDev;
