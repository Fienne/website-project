import React from "react";
import { Container } from "react-bootstrap";
import RegButton from "../Button/RegButton";

function Contactform() {
  return (
    <Container>
      <section class="mb-4">
        <h2
          class="h1-responsive font-weight-bold text-center my-4"
          style={{ color: "var(--primary-color)" }}
        >
          Contact us
        </h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-8 mb-md-0 mb-5">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email">Your email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" className="mt-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message" className="mt-3">
                      Your message
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="5"
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-left text-md-left mt-3">
              <RegButton title="Submit" />
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 3"
                  viewBox="0 0 24 24"
                  style={{ width: "40px" }}
                >
                  <path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" />
                </svg>
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z" />
                </svg>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: "40px" }}>
                  <path
                    fill="#231f20"
                    d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                  />
                  <path
                    fill="#231f20"
                    d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                  />
                </svg>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Contactform;
