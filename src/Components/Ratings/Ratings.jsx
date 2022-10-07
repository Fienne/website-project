import React from "react";

//import styles
import "./Ratings.css"

const Ratings = () => {
  return (
    // <div style={{color:"yellow"}}>
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star"></span>
    //   <span class="fa fa-star"></span>
    // </div>
    <div className="d-flex">
    <div className="five-pointed-star"></div>
    <div className="five-pointed-star"></div>
    <div className="five-pointed-star"></div>
    <div className="five-pointed-star"></div>
    <div className="five-pointed-star"></div>
    </div>
  );
};

export default Ratings;
