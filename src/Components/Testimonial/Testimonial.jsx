import React from "react";
import "./Testimonial.css"

function Testimonial() {
  return (
//     <div className="d-flex">
//       <div className="single-testimonial">
//         <div className="testimonials-wrapper">
//           <h4>
//             Habitasse lobortis cum malesuada nullam cras odio venenatis nisl at
//             turpis sem in porta consequat massa a mus massa nascetur elit
//             vestibulum a.
//           </h4>
//           <div className="testimonials-blob"></div>
//           <div className="testimonials-img">
//             <img src="https://randomuser.me/api/portraits/women/21.jpg" />
//           </div>
//           <div className="testimonials-person-info">
//             <p>
//               <b>Jane Doe</b>
//               <br />
//               Web Developer
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="single-testimonial">
//         <div className="testimonials-wrapper">
//           <h4>
//             Aenean a neque ipsum. In viverra mauris nibh, nec dapibus nibh
//             imperdiet at. Nulla urna odio, aliquam tincidunt posuere quis,
//             placerat nec sem.
//           </h4>
//           <div className="testimonials-blob"></div>
//           <div className="testimonials-img">
//             <img src="https://randomuser.me/api/portraits/women/65.jpg" />
//           </div>
//           <div className="testimonials-person-info">
//             <p>
//               <b>Jane Doe</b>
//               <br />
//               Web Developer
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="single-testimonial">
//         <div className="testimonials-wrapper">
//           <h4>
//             Donec in quam eget arcu convallis maximus. In hac habitasse platea
//             dictumst. Etiam commodo faucibus vestibulum. Aliquam vitae
//             consectetur velit.
//           </h4>
//           <div className="testimonials-blob"></div>
//           <div className="testimonials-img">
//             <img src="https://randomuser.me/api/portraits/women/96.jpg" />
//           </div>
//           <div className="testimonials-person-info">
//             <p>
//               <b>Jane Doe</b>
//               <br />
//               Web Developer
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

<div className="container-card testimonial">
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-content">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Robert Garrison
                        </div>
                        <div className="designation">Android Developer</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                            pleasant.
                            The service was execellent. I will refer everyone I know.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-content ">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Jeffery Kennan
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                            man, this thing is getting better and better as I learn more about it.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-content ">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Issac Maxwell
                        </div>
                        <div className="designation">Finance Director</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Account keeper is the most valuable business research we have EVER purchased. Without
                            electrician, we would ahave gone bankrupt by now.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Testimonial;