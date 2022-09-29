import { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import "./ReadMore.css";

// const max_possible_height = 500;
// const ReadMore = ({ maxHeight, children }) => {
//   const ref = useRef();

//   const [isReadMoreShown, setReadMoreShown] = useState(false);

//   const [expanded, setExpanded] = useState(true);

//   useEffect(() => {
//     if (ref.current.scrollHeight > maxHeight) {
//       setReadMoreShown(true);
//       setExpanded(false);
//     }
//   }, [maxHeight]);

//   const toggleButton = () => {
//     setReadMoreShown((prevState) => !prevState);
//   };

//   return (
// <div className="read-more">
//   {isReadMoreShown ? children : children.substr(0, 200)}
//   <a onClick={toggleButton} className="readmore"> {isReadMoreShown ? 'Read Less' : '..Read More'}</a>
// </div>

//     <Card.Text ref={ref}>
//       <div
//         className="read-more"
//         style={{ maxHeight: expanded ? max_possible_height : maxHeight }}
//       >
//         {children}
//       </div>
//       {isReadMoreShown ? children : children.substr(0, 100)}
//       {<a onClick={() => setExpanded(!expanded)} className="readmore">
//         {isReadMoreShown ? "Read Less" : "..Read More"}
//       </a>}
//     </Card.Text>
//   );
// };

const MAX_POSSIBLE_HEIGHT = 500;

const ExpendableText = ({ maxHeight, children}) => {
  const ref = useRef();
  const [shouldShowExpand, setShouldShowExpand] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (ref.current.scrollHeight > maxHeight) {
      setShouldShowExpand(true);
      setExpanded(false);
    }
  }, [maxHeight]);

  return (
    <Card.Text ref={ref}>
      <div
        class="inner"
        style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight }}
      >
        {children}
      </div>
      {shouldShowExpand && (
        <button onClick={() => setExpanded(!expanded)}>Expand</button>
      )}
    </Card.Text>
  );
};

export default ExpendableText;
