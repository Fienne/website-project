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

  // const getContacts = async() => {
  //   const contacts = await axios.get(`${baseURL}/add-contact`)
  //   setContactList(contacts.data);
  // }

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
          <div className="col col-lg-6 col-md-12 col-sm-12">
            <h3>
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
          <div className="col col-lg-6 col-md-12 col-sm-12"></div>
        </div>

        <br />
        <section className="mb-4">
          <h2
            className="contact-heading h1-responsive font-weight-bold my-4 "
            style={{ color: "var(--primary-color)" }}
          >
            Contact us
          </h2>
          {/* <p className="w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p> */}

          <form>
            <div className="row">
              <div className="col-md-8 mb-md-0 mb-5">
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
            </div>
          </form>
          <FAQ />
        </section>
      </Container>
          <Newsletter />
    </div>
  );
}

export default ContactForm;
