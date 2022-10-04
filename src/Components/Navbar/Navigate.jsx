import { Container, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import RegButton from "../Button/RegButton";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "../../Screens/Home/Home";
import GetTrained from "../../Screens/GetTrained/GetTrained";
import WebAppDev from "../../Screens/WebAppDev/WebAppDev";
import BrandIdentity from "../../Screens/BrandIdentity/BrandIdentity";
import SEOServices from "../../Screens/SEOServices/SEOServices";
import AboutUs from "../../Screens/AboutUs/AboutUs";
import ContactForm from "../Contact/ContactForm";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg md">
        <Container>
          <Navbar.Brand to="/home">
            <img
              src="./Images/Datagirltechlogo.png"
              width=""
              height="60"
              className="d-inline-block align-top"
              alt="DataGirl logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/get-trained">
                Get Trained
              </Nav.Link>
              <NavDropdown as={Link} title="Our Services" to="/ourService">
                <NavDropdown.Item as={Link} to="/web-and-app-development">
                  Web and App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/brand-identity">
                  Brand Identity
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/seo-services">
                  SEO Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Link to="/contact">
              <RegButton title="Contact Us" />
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route element={<Navigate to="/home" />} path="*" />
        <Route element={<Home />} path="/home" />
        <Route element={<GetTrained />} path="/get-trained" />
        <Route element={<WebAppDev />} path="/web-and-app-development"/>
        <Route element={<BrandIdentity />}  path="/brand-identity" />
        <Route element={<SEOServices />} path="/seo-services" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<ContactForm/>} path="/contact" />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
