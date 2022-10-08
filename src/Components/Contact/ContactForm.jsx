import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";

//import components
import RegButton from "../Button/RegButton";
import FAQ from "../FAQ/FAQ";
import Newsletter from "../Newsletter/Newsletter";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [contactList, setContactList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const baseURL = "http://localhost:5000";

  // useEffect(() => {
  //   getContacts();
  // }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const submit = async () => {
    const contact = await axios.post(`http://localhost:5000/add-contact`, {
      name,
      email,
      subject,
      message,
    });
    setContactList([...contactList, contact.data]);
  };

  return (
    <div>
      <div
        style={{ height: "200px", background: "var(--primary-color)" }}
        className="contact-header"
      >
        <h2 className="contact-heading">
          <b>Contact Us</b>
        </h2>
      </div>
      <br />
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="mt-5">
              <b>
                A brand and digital design agency for ambitious young businesses
              </b>
            </h3>
            <p>
              At DataGirl Technologies, we prioritize brands to understand
              behavior, solve complex challendes and create mutually beneficial
              experiences.
            </p>
            <p>
              We focus on branding, apps, video-centric web design, development,
              and strategy in all of our products.
            </p>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12">
            <img src="./Images/Contact us-amico.png" className="img-fluid" />
          </div>
        </div>

        <br />
        <section className="mb-4">
          <h2
            className="contact-heading h1-responsive font-weight-bold my-4 "
            style={{ color: "var(--primary-color)" }}
          >
            Contact us
          </h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-md-0 mb-5">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label for="name">Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          onChange={handleNameChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label for="email">Your email</label>
                        <input
                          // type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <label for="subject" className="mt-3">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          onChange={handleSubjectChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <label for="message" className="mt-3">
                          Your message
                        </label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="5"
                          className="form-control md-textarea"
                          onChange={handleMessageChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <div class="text-left text-md-left mt-3">
              <RegButton title="Submit" onClick={submit} />
            </div> */}
                <button onClick={submit} className="mt-4">
                  Submit
                </button>
              </div>
              <div className="col-md-6 mb-md-0 mb-5">
                <h2>
                  <b>
                    Let's make something great together and let your brand shine
                  </b>
                </h2>
                <p>
                  <b>Doing great products for good people</b>
                </p>
                <p>
                  We build sunny warm-toned optimistic brands. Life's too short
                  for dull businesses. Experienced with different poles which
                  can be helpful at different stages of the projects.
                </p>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-md-6">
              <img src="./Images/Datagirl-flyer.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <FAQ />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ContactForm;
