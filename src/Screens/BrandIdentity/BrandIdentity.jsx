import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//import components
import RegButton from "../../Components/Button/RegButton";

const BrandIdentity = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col className="col-lg-6 col-sm-12">
            <br />
            <br />
            <br />
            <h1 className="mt-5">
              Designing your digital experience ecosystem
            </h1>
            <p>
              Human centered design principles with deep dive into understanding
              and knowing client's businesses and brands
            </p>
            
            <Link to="/about-us">
              <RegButton title="Get Started" />
            </Link>
            <br />
            {/* <RegButton title="Get Started" /> */}
          </Col>
          <Col className="col-lg-6 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="./Images/Static website-rafiki.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandIdentity;
