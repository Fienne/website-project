import { React, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./Card.component.css";

//import components
import Collapse from "react-bootstrap/Collapse";

// function CardComponent(props) {

//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Col lg={4} md={6} sm={12}>
//         <Card className="mt-4 shadow" style={{ height: '14rem' }}>
//           <Card.Body>
//             <svg
//               className="svg"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 64 64"
//               style={{ width: "40px", color: "red" }}
//             >
//               {props.svg}
//             </svg>
//             <h3>{props.title}</h3>
//             <Collapse in={open}>
//               <p className="paragraph">{props.content}</p>
//             </Collapse>
//             {/* <Col className="justify-content-end"> */}
//             <a
//               onClick={() => setOpen(!open)}
//               aria-controls="example-collapse-text"
//               aria-expanded={open}
//               style={{ color: "var(--primary-color)" }}
//             >
//               {open ? "Read Less" : "Read More"}
//             </a>
//             <a
//               onClick={() => setOpen(!open)}
//               aria-controls="example-collapse-text"
//               aria-expanded={open}
//               style={{ color: "var(--primary-color)" }}
//             >
//               Register Now
//             </a>
//           </Card.Body>
//         </Card>
//       </Col>
//     </>
//   );
// }
// export default CardComponent;

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{ color:"var(--primary-color)" }}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const CardComponent = (props) => {

  return (
    <>
      <Col lg={4} md={6} sm={12}>
        <Card className="mt-3 shadow" style={{  }}>
          <Card.Body>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              style={{ width: "40px", color: "red" }}
            >
              {props.svg}
            </svg>
            <h3 style={{ paddingTop:'10px'}} className="fw-bold">{ props.title }</h3>
            <ReadMore>
            {props.readmore}</ReadMore>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
