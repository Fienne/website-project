import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SEOServices.css";

//import components
import RegButton from "../../Components/Button/RegButton";

const SEOServices = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-lg-6 col-sm-12">
            <br />
            <br />
            <br />
            <h1 className="mt-5">
              Focus on getting leads and sales
            </h1>
            <p>
              Use sustainable methods to build your organic rankings,
              attract tons of natural links and increase your traffic.
            </p>

            <Link to="/about-us">
              <RegButton title="Get Started" />
            </Link>
            <br />
            {/* <RegButton title="Get Started" /> */}
          </Col>
          <Col className="col-lg-6 col-sm-12 seo-img bounce-1">
            <img
              style={{ width: "100%" }}
              src="./Images/SEO-amico 1.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SEOServices;
