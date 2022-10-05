import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter text-center col-lg-12 col-md-6">
      <div className="container">
        <h2 className="pt-5">
          Subscribe to our mailing list. Join our mail list to receive our
          newsletter
        </h2>
        <p>
          We'll keep you up to date with our latest news, insights, free
          resources, and much more.
        </p>
        <form action="">
          <input
            placeholder="Enter your email"
            style={{
              borderRadius: "20px",
              width: "300px",
              height: "40px",
              border: "none",
            }}
          />
          <br />
          <br />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
