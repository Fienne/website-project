import { Row, Col, Container, Card } from "react-bootstrap";
import RegButton from "../../Components/Button/RegButton";
import "./WebAppDev.css";
import Footer from "../../Components/Footer/Footer";

const WebAppDev = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-lg-6 col-sm-12">
            <br />
            <br />
            <br />
            <h1>We build awesome apps and websites</h1>
            <p>
              We specialise in developing applications and outstanding websites.
            </p>
            <br />
            {/* <RegButton title="Get Started" /> */}
          </Col>
          <Col className="col-lg-6 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="./Images/Website setup-amico.png"
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <p>Making products that stand out from the crowd</p>
        </div>
        <div className="d-flex justify-content-center">
          <h1>We create digital solutions</h1>
        </div>
        <br />
        <br />
        <Row>
          <Col>
            <Card style={{height:"10rem"}} className="p-3 text-center">
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
            <Card style={{height:"10rem"}} className="p-3 text-center">
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
            <Card style={{height:"10rem"}} className="p-3 text-center">
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
            <Card style={{height:"10rem"}} className="p-3 text-center">
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
      </Container>
      <br/>
      <br/>
    </div>
  );
};

export default WebAppDev;
