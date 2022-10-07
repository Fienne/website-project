import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SEOServices.css";

//import components
import RegButton from "../../Components/Button/RegButton";

const SEOServices = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6 col-sm-12">
            <br />
            <br />
            <br />
            <h1 className="mt-5 fw-bold">Focus on getting leads and sales</h1>
            <p className="seo-heading">
              Use sustainable methods to build your organic rankings, attract
              tons of natural links and increase your traffic.
            </p>

            <Link to="/about-us">
              <RegButton title="Get Started" />
            </Link>
            <br />
            {/* <RegButton title="Get Started" /> */}
          </div>
          <div className="col-md-6 col-sm-12 seo-img bounce-1">
            <img style={{ width: "100%" }} src="./Images/SEO-amico 1.png" className="seo-hero"/>
          </div>
        </Row>
        <Row className="mt-3">
          <div className="mt-5 col-md-6">
            <img src="./Images/seo-5.png" className="img-fluid" />
          </div>
          <div className="mt-5 col-md-6 left-content">
            <h3 className="fw-bold">
              We are SEO professionals with extensive experience
            </h3>
            <h5 className="fw-bold mt-4">Search engine optimization</h5>
            <p className="">
              You can modernize elements of your website or build one from
              scratch using our fully optimized web solutions.
            </p>
            <h5 className="fw-bold">Web design and development</h5>
            <p>
              We focus on branding, apps, video-centric web design, development,
              and strategy in all of our products.
            </p>
            <Link to="contact-us">
              <button className="left-button"> Get Started</button>
            </Link>
          </div>

          <div className="d-flex justify-content-center dots">
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
            <span className="text-center dot"></span>&nbsp;&nbsp;
          </div>
        </Row>
        <Row className="text-center mid-content">
          <h2 className="fw-bold">
            There are no extra fees, no contracts or monthly charges
          </h2>
          <p>
            Here’s a complete list of what we’ve built to help you make a living
            online.
          </p>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Container>
              <Card className="text-center seo-card shadow">
                <h5 className="fw-bold">FULL SEO PACKAGE</h5>
                <p>Attract quality traffic</p>
                <hr />
                <Card.Body>
                  <h3
                    className="fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    $700/Month
                  </h3>
                  <hr />
                  <Card.Text>
                    Powerful link-building campaign (Source having high page
                    rank and domain authority). Promotion of traffic-driving &
                    high-search volume keywords. <br />
                    Optimization of several pages in terms of SEO. Unique &
                    Optimized SEO Content Writing Keywords research and
                    addition. <br className="mt-3"></br>
                    Internal & External error fixing of the whole website. You
                    will be getting rankings improvement reports every 15 days{" "}
                    <br />
                    The website will be fully compliant with Google's algorithm.
                  </Card.Text>
                </Card.Body>
                <Link to="contact-us">
                  <button className="left-button" style={{height:"40px", width:"150px", borderRadius:"40px"}}> Purchase Now</button>
                </Link>
              </Card>
            </Container>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Container>
              <Card className="text-center seo-card shadow">
                <br />
                <hr />
                <Card.Body>
                  <h3
                    className="fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Additional Services
                  </h3>
                  <hr />
                  <Card.Text>
                    Improving the website HTML code, placing the required tags
                    and attributes. Removing irrelevant external links. <br />
                    Error 404 and broken links removal. <br />
                    Changing website interlinking to add max link juice to the
                    promoted pages.
                    <br />
                    Editing of robots.txt and .ht access files for correct
                    indexing and loading speed.
                    <br />
                    Sitemap file generation for complete indexing of the website
                    pages.
                    <br />
                    Placing social media buttons on the website. Page speed
                    improvement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
        <Row className="mt-3">
          <div className="mt-5 col-md-6 ">
            <h3 className="fw-bold">
              Get more traffic with fully advanced SEO services
            </h3>
            <p>
              There’s some SEO in everything you do online. But that doesn’t
              mean everyone needs the same SEO services. Build your search
              engine optimization foundation with the trusted experts. We offer
              the right plans and strategies match your exact needs.
            </p>
            <Link to="contact-us">
              <button className="left-button"> Get Started</button>
            </Link>
          </div>
          <div className="mt-5 col-md-6">
            <img src="./Images/seo-1.jpg" className="img-fluid" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SEOServices;
