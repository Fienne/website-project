import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row p-5">
        <div className="col">
          <img src="./Images/dg-logo.png" alt="" />
          <p>
            We are an award-winning digital agency rendering services in web
            development, digital marketing, and branding to small and medium
            sized enterprises. We offer quality and ICT and Computer training
            services in Cameroon.
          </p>
          <div className="row">
            <div className="col">
              <a href="#" className="align-base">
                <svg
                  width="29"
                  height="54"
                  viewBox="0 0 29 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "10px" }}
                >
                  <path
                    d="M23.32 9.18667H28.3334V0.706665C25.906 0.454257 23.4671 0.329641 21.0267 0.333332C13.7734 0.333332 8.81338 4.76 8.81338 12.8667V19.8533H0.626709V29.3467H8.81338V53.6667H18.6267V29.3467H26.7867L28.0134 19.8533H18.6267V13.8C18.6267 11 19.3734 9.18667 23.32 9.18667Z"
                    fill="#8998C2"
                  />
                </svg>
              </a>
              <a href="#" className="p-3 align-base">
                <svg
                  width="54"
                  height="44"
                  viewBox="0 0 54 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "20px" }}
                >
                  <path
                    d="M53.6666 5.46668C51.6621 6.33626 49.5424 6.91111 47.3732 7.17334C49.6617 5.8062 51.3766 3.65543 52.1999 1.12001C50.0494 2.40018 47.6953 3.30213 45.2399 3.78668C43.5987 2.00687 41.4132 0.822133 39.0261 0.41828C36.639 0.0144272 34.1854 0.414299 32.05 1.55518C29.9147 2.69606 28.2184 4.51343 27.2272 6.72224C26.236 8.93105 26.006 11.4064 26.5733 13.76C22.2251 13.5401 17.9718 12.4079 14.0897 10.437C10.2076 8.46606 6.78351 5.70052 4.03992 2.32001C3.07762 4.00046 2.57197 5.90354 2.57325 7.84001C2.56984 9.63836 3.01116 11.4097 3.85793 12.9962C4.7047 14.5827 5.93063 15.9352 7.42658 16.9333C5.68786 16.886 3.98628 16.4195 2.46659 15.5733V15.7067C2.47962 18.2264 3.36257 20.6643 4.96609 22.6079C6.56961 24.5516 8.79527 25.8817 11.2666 26.3733C10.3153 26.6629 9.32758 26.8155 8.33325 26.8267C7.64496 26.8186 6.95838 26.7562 6.27992 26.64C6.98368 28.8075 8.34558 30.7017 10.1761 32.0591C12.0067 33.4165 14.2148 34.1695 16.4933 34.2133C12.6458 37.2407 7.89561 38.893 2.99992 38.9067C2.10855 38.9096 1.21788 38.8562 0.333252 38.7467C5.33173 41.974 11.1568 43.6873 17.1066 43.68C21.2124 43.7226 25.2856 42.9467 29.0882 41.3976C32.8908 39.8484 36.3466 37.557 39.2538 34.6573C42.1609 31.7576 44.4612 28.3077 46.0201 24.5091C47.579 20.7105 48.3654 16.6393 48.3332 12.5333C48.3332 12.08 48.3332 11.6 48.3332 11.12C50.4258 9.5595 52.2305 7.64648 53.6666 5.46668V5.46668Z"
                    fill="#8998C2"
                  />
                </svg>
              </a>
              <a href="" className="align-base">
                <svg
                  width="64"
                  height="46"
                  viewBox="0 0 64 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "20px" }}
                >
                  <path
                    d="M26.506 44.9479C14.3175 44.7233 10.1545 44.5212 7.5957 43.9934C5.86449 43.6427 4.36007 42.8641 3.25699 41.7347C2.40445 40.88 1.72645 39.576 1.20044 37.7667C0.749232 36.2594 0.573498 35.0052 0.32296 31.9418C-0.0605659 25.0281 -0.151995 19.3756 0.32296 13.0597C0.714797 9.57194 0.904779 5.43152 3.50753 3.01598C4.73647 1.88548 6.16609 1.15797 7.77144 0.857215C10.2792 0.380527 20.9633 0.00369263 32.0238 0.00369263C43.0594 0.00369263 53.7672 0.380527 56.2774 0.857215C58.2829 1.23405 60.1637 2.36336 61.2679 3.81958C63.6427 7.55938 63.6843 12.2098 63.9253 15.8473C64.0251 17.5805 64.0251 27.4222 63.9253 29.1554C63.5501 34.9042 63.2485 36.9381 62.396 39.047C61.8688 40.3784 61.4187 41.0809 60.6398 41.8596C59.4182 43.0578 57.8608 43.8548 56.1752 44.1443C45.6277 44.9384 36.6712 45.1108 26.506 44.9479V44.9479ZM42.658 21.8482C36.79 18.7087 31.1713 15.7974 25.4279 12.7839V30.8125C31.4717 27.5232 37.8432 24.5098 42.683 21.8232L42.658 21.8482Z"
                    fill="#8998C2"
                  />
                </svg>
              </a>
              <a href="" className="p-3 align-base">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "20px" }}
                >
                  <g clip-path="url(#clip0_1_23)">
                    <path
                      d="M0 7.43439C0 5.27947 0.720741 3.5017 2.16216 2.10107C3.60358 0.700375 5.4775 6.10352e-05 7.78378 6.10352e-05C10.0489 6.10352e-05 11.8816 0.689579 13.2819 2.06874C14.7233 3.49096 15.444 5.34412 15.444 7.62833C15.444 9.69702 14.7439 11.4209 13.3436 12.8C11.9022 14.2223 10.0077 14.9334 7.66023 14.9334H7.59846C5.33331 14.9334 3.50066 14.2223 2.10039 12.8C0.700108 11.3778 0 9.58925 0 7.43439ZM0.803089 64V20.8162H14.5174V64H0.803089ZM22.1158 64H35.8301V39.8869C35.8301 38.3784 35.9949 37.2148 36.3243 36.396C36.9009 34.9306 37.7761 33.6915 38.9498 32.6788C40.1236 31.666 41.5959 31.1596 43.3668 31.1596C47.9794 31.1596 50.2857 34.4135 50.2857 40.9212V64H64V39.2404C64 32.8619 62.5586 28.0243 59.6757 24.7273C56.7928 21.4303 52.9833 19.7818 48.2471 19.7818C42.9344 19.7818 38.7954 22.1738 35.8301 26.9576V27.0869H35.7683L35.8301 26.9576V20.8162H22.1158C22.1982 22.1953 22.2394 26.4835 22.2394 33.6808C22.2394 40.8781 22.1982 50.9844 22.1158 64Z"
                      fill="#8998C2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_23">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="align-base">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "20px" }}
                >
                  <g clip-path="url(#clip0_1_21)">
                    <path
                      d="M21.3351 32C21.3351 26.1092 26.1092 21.3325 32 21.3325C37.8908 21.3325 42.6675 26.1092 42.6675 32C42.6675 37.8908 37.8908 42.6675 32 42.6675C26.1092 42.6675 21.3351 37.8908 21.3351 32ZM15.5683 32C15.5683 41.0753 22.9247 48.4317 32 48.4317C41.0753 48.4317 48.4317 41.0753 48.4317 32C48.4317 22.9247 41.0753 15.5683 32 15.5683C22.9247 15.5683 15.5683 22.9247 15.5683 32ZM45.242 14.917C45.242 17.0365 46.9609 18.758 49.083 18.758C51.2026 18.758 52.9241 17.0365 52.9241 14.917C52.9241 12.7974 51.2052 11.0785 49.083 11.0785C46.9609 11.0785 45.242 12.7974 45.242 14.917ZM19.0708 58.0472C15.9509 57.905 14.2553 57.3855 13.1283 56.946C11.6342 56.3645 10.5693 55.6717 9.4475 54.5525C8.32827 53.4333 7.63296 52.3683 7.05396 50.8743C6.61454 49.7473 6.09499 48.0517 5.95283 44.9318C5.79774 41.5586 5.76672 40.5454 5.76672 32C5.76672 23.4546 5.80032 22.4439 5.95283 19.0682C6.09499 15.9483 6.61712 14.2553 7.05396 13.1257C7.63554 11.6317 8.32827 10.5667 9.4475 9.44491C10.5667 8.32569 11.6317 7.63037 13.1283 7.05137C14.2553 6.61195 15.9509 6.09241 19.0708 5.95024C22.4439 5.79515 23.4572 5.76414 32 5.76414C40.5454 5.76414 41.5561 5.79774 44.9318 5.95024C48.0517 6.09241 49.7447 6.61454 50.8743 7.05137C52.3683 7.63037 53.4333 8.32569 54.5551 9.44491C55.6743 10.5641 56.367 11.6317 56.9486 13.1257C57.388 14.2527 57.9076 15.9483 58.0498 19.0682C58.2048 22.4439 58.2359 23.4546 58.2359 32C58.2359 40.5428 58.2048 41.5561 58.0498 44.9318C57.9076 48.0517 57.3855 49.7473 56.9486 50.8743C56.367 52.3683 55.6743 53.4333 54.5551 54.5525C53.4359 55.6717 52.3683 56.3645 50.8743 56.946C49.7473 57.3855 48.0517 57.905 44.9318 58.0472C41.5586 58.2023 40.5454 58.2333 32 58.2333C23.4572 58.2333 22.4439 58.2023 19.0708 58.0472M18.8071 0.193861C15.4003 0.34895 13.074 0.889176 11.0397 1.68013C8.9357 2.49693 7.15218 3.59289 5.37124 5.37124C3.59289 7.1496 2.49693 8.93312 1.68013 11.0397C0.889176 13.074 0.34895 15.4003 0.193861 18.8071C0.0361874 22.2191 0 23.3099 0 32C0 40.6901 0.0361874 41.7809 0.193861 45.1929C0.34895 48.5997 0.889176 50.926 1.68013 52.9603C2.49693 55.0643 3.59031 56.8504 5.37124 58.6288C7.1496 60.4071 8.93312 61.5005 11.0397 62.3199C13.0766 63.1108 15.4003 63.6511 18.8071 63.8061C22.2216 63.9612 23.3099 64 32 64C40.6927 64 41.7809 63.9638 45.1929 63.8061C48.5997 63.6511 50.926 63.1108 52.9603 62.3199C55.0643 61.5005 56.8478 60.4071 58.6288 58.6288C60.4071 56.8504 61.5005 55.0643 62.3199 52.9603C63.1108 50.926 63.6536 48.5997 63.8061 45.1929C63.9612 41.7784 63.9974 40.6901 63.9974 32C63.9974 23.3099 63.9612 22.2191 63.8061 18.8071C63.6511 15.4003 63.1108 13.074 62.3199 11.0397C61.5005 8.9357 60.4071 7.15218 58.6288 5.37124C56.8504 3.59289 55.0643 2.49693 52.9628 1.68013C50.926 0.889176 48.5997 0.346365 45.1955 0.193861C41.7835 0.0387722 40.6927 0 32.0026 0C23.3099 0 22.2216 0.0361874 18.8071 0.193861"
                      fill="#8998C2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_21">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="p-3 align-base">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "20px" }}
                >
                  <g clip-path="url(#clip0_1_19)">
                    <path
                      d="M31.996 0C14.328 0 1.84659e-05 14.384 1.84659e-05 32.128C-0.00720001 38.8622 2.10208 45.4284 6.02974 50.8985C9.95741 56.3687 15.5048 60.4662 21.888 62.612C23.488 62.908 24.072 61.916 24.072 61.064C24.072 60.3 24.044 58.28 24.028 55.6C15.128 57.54 13.248 51.292 13.248 51.292C11.796 47.58 9.69602 46.592 9.69602 46.592C6.78802 44.6 9.91202 44.64 9.91202 44.64C13.124 44.868 14.812 47.952 14.812 47.952C17.668 52.86 22.304 51.444 24.128 50.62C24.416 48.544 25.244 47.128 26.16 46.324C19.056 45.512 11.584 42.756 11.584 30.448C11.584 26.94 12.832 24.072 14.88 21.824C14.548 21.012 13.452 17.744 15.192 13.324C15.192 13.324 17.88 12.46 23.992 16.616C26.603 15.9024 29.2973 15.5393 32.004 15.536C34.7109 15.5414 37.4051 15.9059 40.016 16.62C46.124 12.464 48.808 13.328 48.808 13.328C50.552 17.752 49.456 21.016 49.128 21.828C51.18 24.076 52.416 26.944 52.416 30.452C52.416 42.792 44.936 45.508 37.808 46.304C38.956 47.296 39.98 49.256 39.98 52.252C39.98 56.548 39.94 60.012 39.94 61.064C39.94 61.924 40.516 62.924 42.14 62.608C48.517 60.4571 54.0575 56.3581 57.9797 50.8892C61.9019 45.4204 64.0078 38.8579 64 32.128C64 14.384 49.672 0 31.996 0Z"
                      fill="#8998C2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_19">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Col lg={4} className="padding-left">
          <h4>About Company</h4>
          <br/>
          <Row>
            <Col>
              <a href="#">About</a>
              <br />
              <br />
              <a href="#">Services</a>
              <br />
              <br />
              <a href="#">Resources</a>
              <br />
              <br />
              <a href="#">Portfolio</a>
            </Col>
            <Col>
              <a href="#">Pricing</a>
              <br />
              <br />
              <a href="#">Careers</a>
              <br />
              <br />
              <a href="#">News</a>
              <br />
              <br />
              <a href="#">Events</a>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="padding-left">
          <h4>Contact Us</h4>
          <br/>
          <Col>
            <p>Mon-Fri: 8.00am - 6.00pm</p>
          </Col>
          <Col>
            <p>2nd Floor, Building opposite El Palacia</p>
          </Col>
          <Col>
            <p>(+237) 677-303-086</p>
          </Col>
          <Col>
            <p>info@datagirltech.com</p>
          </Col>
        </Col>
      </div>
    </footer>
  );
};

export default Footer;
