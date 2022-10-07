import { Row, Col, Container, Card } from "react-bootstrap";
import "./GetTrained.css";

//import components
import Footer from "../../Components/Footer/Footer";
import RegButton from "../../Components/Button/RegButton";
import ReadMore from "../../Components/ReadMore/ReadMore.component";
import CardComponent from "../../Components/Card/Card.components";
import Testimonial from "../../Components/Testimonial/Testimonial";

const GetTrained = () => {
  return (
    <div>
      <Container>
        <div className="row mt-2">
          <div className="col-md-6">
            <h3 className="mt-5 trained-header" style={{ color: "var(--primary-color)" }}>
              Let Us Help You Build a Career in Tech
            </h3>
            <br />
            <p>
              Do you want to change jobs and take up an IT career? <br /> Are
              you a graduate who wants to build a career in IT? <br /> Do you
              have some skills in IT but you want to build a career path that
              can give you your dream job? <br /> Are you not sure of the IT
              training and skills you need to prepare for the career you want?{" "}
              <br /> DataGirl's IT career path training is created to help you
              choose a career in IT, get the required IT training and skills
              which prepare you for a well-paying job. Our IT career path
              specialist is always ready to guide you
            </p>
            <br />
            <RegButton title="Contact Us" />
          </div>
          <div className="col-md-6">
            <img
              src="./Images/Data extraction-amico.png"
              alt=""
              className="hero-image-trained"
            />
          </div>
        </div>

        <div className="row">
          <h2>Get Trained</h2>
          <CardComponent
            svg={
              <g data-name="programming-web-coding">
                <path d="M61 4H3a1 1 0 0 0-1 1v45a1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1v-7h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM4 6h56v6H4Zm11 54V22h20v7a1 1 0 0 0 1 1h7v6.929l-9.879 9.879a.985.985 0 0 0-.241.391l-2.828 8.485A1 1 0 0 0 31 57a1.014 1.014 0 0 0 .316-.051L39.8 54.12a.991.991 0 0 0 .39-.242L43 51.071V60Zm25.2-8.96-.727-.707a1 1 0 0 0-.373-.233l-.587-.2 10.872-10.871 1.415 1.415ZM37 23.414 41.586 28H37ZM46.556 36.2l1.415 1.414-10.877 10.878-.2-.587a.988.988 0 0 0-.241-.391l-.707-.707ZM33.205 52.548l1.247 1.252-1.871.624Zm3.368.54-2.661-2.661.707-2.122.457.457.633 1.9a1 1 0 0 0 .632.632l1.9.635.463.449Zm15.64-14.058-4.243-4.244 1.415-1.414 4.243 4.243Zm2.829-2.83L50.8 31.958l.707-.707a3 3 0 0 1 4.243 4.243ZM47 32.929l-2 2V29a1 1 0 0 0-.293-.707l-8-8A1 1 0 0 0 36 20H18v-2h29ZM45 57v-7.929l2-2V57Zm4-8v-3.929l8.163-8.163a5 5 0 0 0-7.071-7.071L49 30.929V17a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v3h-2a1 1 0 0 0-1 1v28H4V14h56v35Z" />
                <path d="M6 8h2v2H6zM10 8h2v2h-2zM14 8h2v2h-2zM19.293 33.707l1.414-1.414L19.414 31l1.293-1.293-1.414-1.414-2 2a1 1 0 0 0 0 1.414ZM22.2 32.4l3-4 1.6 1.2-3 4zM29.707 33.707l2-2a1 1 0 0 0 0-1.414l-2-2-1.414 1.414L29.586 31l-1.293 1.293ZM17 36h4v2h-4zM23 36h8v2h-8zM19 40h2v2h-2zM23 40h5v2h-5zM21 44h4v2h-4zM27 44h5v2h-5zM30 40h5v2h-5zM33 36h2v2h-2zM33 32h2v2h-2z" />
              </g>
            }
            title="Full Stack Web Development"
            readmore="
            This practical hands-on front-end web design and web
            development training in Cameroon gives you full training on
            front end website design and development. In this front-end
            web design and web development training, you will learn basic
            to advanced skills that every web developer needs to know.
            Develop the skills you need in order to be able to make
            websites from scratch. This is the beginning of your website
            design and development journey. Learn to use HTML5, CSS3,
            JavaScript, React , Mongo DB, Python. and Django together in
            building modern beautiful, fully functional amazing websites."
          />
          <CardComponent
            svg={
              <path
                d="M43.2431 40.6718C46.9159 36.3999 48.9689 30.9721 49.0427 25.3389C49.1165 19.7057 47.2064 14.226 43.6469 9.85933C41.3986 7.07802 38.558 4.83352 35.3321 3.2895C32.1062 1.74549 28.5764 0.940871 25 0.934326C21.4395 0.93508 17.9235 1.72658 14.7062 3.25167C11.4888 4.77675 8.65026 6.99735 6.39562 9.75308C6.39562 9.75308 6.39562 9.75308 6.39562 9.8062C2.8341 14.172 0.922761 19.6521 0.996583 25.2858C1.07041 30.9196 3.12468 36.3477 6.79937 40.6187C6.81944 40.6455 6.83721 40.6739 6.8525 40.7037H6.91625C9.15599 43.3111 11.9296 45.407 15.0495 46.8496C18.1694 48.2922 21.5628 49.0479 25 49.0656C28.4368 49.0645 31.8334 48.326 34.9604 46.9C38.0874 45.474 40.872 43.3936 43.1262 40.7993H43.19L43.2431 40.6718ZM3.1125 26.0625H10.7094C10.8579 29.3491 11.5769 32.5848 12.8344 35.625C11.9767 35.9618 11.1394 36.3485 10.3269 36.7831C9.41212 37.2782 8.54125 37.8505 7.72375 38.4937C4.93277 34.9295 3.32107 30.5846 3.1125 26.0625ZM7.26687 12.1331C7.98643 12.7539 8.75778 13.3119 9.5725 13.8012C10.5113 14.3539 11.4877 14.8403 12.4944 15.2568C11.444 18.0378 10.8415 20.9677 10.7094 23.9375H3.1125C3.31466 19.6814 4.75889 15.5777 7.26687 12.1331ZM46.8875 23.9375H39.2906C39.2906 23.5762 39.2906 23.2043 39.2906 22.875C39.2877 20.2193 38.8387 17.5831 37.9625 15.0762C39.6742 14.3456 41.2677 13.3645 42.6906 12.165C45.2079 15.5958 46.6668 19.6879 46.8875 23.9375ZM37.2081 22.875C37.2081 23.2362 37.2081 23.6081 37.2081 23.9375H26.0625V17.5625C29.4522 17.4834 32.8111 16.8997 36.0287 15.8306C36.804 18.0985 37.2024 20.4782 37.2081 22.875ZM26.0625 15.4375V3.74995C30.1212 6.05513 33.3431 9.58954 35.2637 13.8437C32.2905 14.8198 29.1908 15.3567 26.0625 15.4375ZM23.9375 15.4375C21.0043 15.3648 18.0946 14.893 15.2887 14.035C17.1028 9.83397 20.11 6.25784 23.9375 3.74995V15.4375ZM23.9375 17.5625V23.9375H12.8344C12.9643 21.2195 13.5163 18.5382 14.4706 15.99C17.5363 16.9579 20.7235 17.4874 23.9375 17.5625ZM12.8344 26.0625H23.9375V33.5C20.8627 33.5732 17.8113 34.0556 14.8637 34.9343C13.677 32.1174 12.9903 29.1152 12.8344 26.0625ZM23.9375 35.625V46.0693C20.4261 43.809 17.6005 40.6306 15.7669 36.8787C18.425 36.1103 21.1713 35.6888 23.9375 35.625ZM26.0625 45.9843V35.625C28.5988 35.6908 31.1193 36.0473 33.5744 36.6875C31.7956 40.3171 29.2292 43.5042 26.0625 46.0162V45.9843ZM26.0625 33.5V26.0625H36.985C36.5703 29.076 35.7333 32.0161 34.4987 34.7962C31.7508 34.0184 28.9172 33.583 26.0625 33.5ZM39.1206 26.0625H46.8875C46.6754 30.604 45.0482 34.9656 42.2337 38.5362C41.6598 38.076 41.0564 37.6536 40.4275 37.2718C39.1906 36.5464 37.8887 35.9382 36.5387 35.4549C37.8305 32.4589 38.6994 29.2978 39.1206 26.0625ZM41.405 10.4756C40.1538 11.5456 38.75 12.4229 37.24 13.0787C35.5689 9.29593 32.9573 6.00393 29.6537 3.5162C34.2101 4.53021 38.3257 6.96755 41.405 10.4756ZM20.6862 3.49495C17.5022 6.15317 14.9781 9.51374 13.3125 13.3125C12.402 12.949 11.5211 12.5156 10.6775 12.0162C9.9238 11.5804 9.21239 11.0753 8.5525 10.5075C11.7227 6.90758 15.9844 4.44463 20.6862 3.49495ZM9.15812 40.1406C9.86339 39.6041 10.6054 39.1177 11.3787 38.685C12.1496 38.2824 12.9444 37.9276 13.7587 37.6225C15.4516 41.0785 17.8773 44.1241 20.8669 46.5475C16.3928 45.6809 12.3001 43.4414 9.15812 40.1406ZM28.7612 46.59C31.6228 43.9957 33.9538 40.8709 35.625 37.3887C36.8981 37.8376 38.1255 38.4069 39.2906 39.0887C39.8152 39.4163 40.3223 39.7709 40.81 40.1512C37.5817 43.5256 33.3606 45.7813 28.7612 46.59Z"
                fill="black"
              />
            }
            title="Basic Computer Literacy"
            readmore="No Matter your level in ICT and Computer knowledge, our
            Diploma in Computer and Computer Appreciation Training will
            give you practical one on one training, Register today, and
            quality but simplified ICT and computer training awaits you
            Despite so many of us using Office package programs in our
            daily lives, they can be a challenge to master without the
            right and experienced Microsoft Office Suite training. Data
            Girl Technologies training course in Cameroon will help you
            learn the ins and outs of this widely-used software trio
            Excel, Word, and PowerPoint, as well as the other popular
            productivity programs Access, Outlook, Project, and Publisher."
          />

          <CardComponent
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 68 68"
                viewBox="0 0 68 68"
                style={{ width: "50px" }}
              >
                <path
                  d="M34.9,12.1c-0.2-0.3-0.5-0.5-0.9-0.5h0c-0.4,0-0.7,0.2-0.9,0.5c-7.3,14.4-6.7,13.3-6.7,13.5v37.9c0,1.9,1.6,3.5,3.5,3.5
            h8.2c1.9,0,3.5-1.6,3.5-3.5c0-40.5,0.1-38.1-0.2-38.5L34.9,12.1z M34,14.8l2.2,4.3c-1.4,0.5-3,0.5-4.4,0L34,14.8z M30.9,20.9
            c2,0.7,4.2,0.7,6.2,0l1.9,3.7H29L30.9,20.9z M28.4,26.6H33v28.9h-4.6V26.6z M39.6,63.5c0,0.8-0.7,1.5-1.5,1.5h-8.2
            c-0.8,0-1.5-0.7-1.5-1.5v-6h11.2V63.5z M39.6,55.5H35V26.6h4.6V55.5z"
                />
                <path
                  d="M55.9,9.2L55.9,9.2c2.3,0,4.1-1.8,4.1-4.1C60,2.8,58.2,1,55.9,1C54,1,52.5,2.3,52,4.1H38.1V2c0-0.6-0.4-1-1-1h-6.1
              c-0.6,0-1,0.4-1,1v2.1H16C15.5,2.3,14,1,12,1C9.8,1,8,2.8,8,5.1C8,7.3,9.8,9.2,12,9.2h0c1.9,0,3.5-1.3,3.9-3.1h8.7
              c-6.8,3-11.9,9.3-13.3,16.9H9c-0.6,0-1,0.4-1,1v6.1c0,0.6,0.4,1,1,1h6.2c0.6,0,1-0.4,1-1V24c0-0.6-0.4-1-1-1h-1.7
              c1.6-8.3,8.2-14.8,16.5-16.5v1.7c0,0.6,0.4,1,1,1h6.1c0.6,0,1-0.4,1-1V6.5c8.3,1.6,14.8,8.2,16.5,16.5h-1.7c-0.6,0-1,0.4-1,1v6.1
              c0,0.6,0.4,1,1,1H59c0.6,0,1-0.4,1-1V24c0-0.6-0.4-1-1-1h-2.5c-1.4-7.6-6.4-13.8-13.3-16.9H52C52.5,7.8,54,9.2,55.9,9.2z M56,3
              C57.1,3,58,3.9,58,5.1c0,1.1-0.9,2.1-2.1,2.1h0c-1.1,0-2.1-0.9-2.1-2.1C53.9,3.9,54.8,3,56,3z M12.1,7.2L12.1,7.2
              c-1.2,0-2.1-0.9-2.1-2.1C10,3.9,10.9,3,12.1,3c1.1,0,2.1,0.9,2.1,2.1C14.1,6.2,13.2,7.2,12.1,7.2z M14.1,25v4.1H10V25H14.1z
              M36.1,7.2h-4.1V3h4.1V7.2z M58,25v4.1h-4.2V25H58z"
                />
              </svg>
            }
            title="Graphics Design"
            readmore="Learn from creative professionals who gladly share their tips,
        techniques, and workflows in some of the most widely used
        graphic design programs including Corel Draw, Adobe Photoshop,
        Adobe InDesign, and Adobe Illustrator A Graphic Designer must
        correctly use typography, imagery, composition, layout, and
        color to solve visual communication problems If you can think
        it, you can make it with Photoshop, the world’s best imaging
        and design app. Create and enhance photographs, illustrations,
        and 3D artwork"
          />

          <CardComponent
            svg={
              <svg
                width="45"
                height="45"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.8193 5.01795C25.4909 4.32955 25.4163 3.54724 25.6088 2.80921C25.8013 2.07117 26.2484 1.4249 26.8711 0.984538C27.4939 0.544175 28.2522 0.338059 29.0122 0.402595C29.7722 0.467131 30.4849 0.798167 31.0245 1.33723L35.6583 5.97317L35.7229 5.90848C36.314 5.31679 37.0673 4.91386 37.8876 4.75073C38.7078 4.5876 39.558 4.67162 40.3304 4.99214C41.1029 5.31267 41.7628 5.85527 42.2266 6.55119C42.6903 7.24712 42.9371 8.06505 42.9356 8.90136C42.9356 10.0226 42.4914 11.0964 41.6979 11.8899L41.6375 11.9503L43.0154 13.3281H55.375C56.2323 13.3298 57.054 13.6712 57.6602 14.2774C58.2664 14.8835 58.6077 15.7052 58.6094 16.5625V44.5938C58.6077 45.451 58.2664 46.2727 57.6602 46.8789C57.054 47.4851 56.2323 47.8264 55.375 47.8281H35.7984L36.165 50.0167C37.5596 50.0675 38.8802 50.6572 39.849 51.6618C40.8178 52.6663 41.3592 54.0075 41.3594 55.403V57.5593C41.3594 57.8452 41.2458 58.1195 41.0436 58.3216C40.8414 58.5238 40.5672 58.6374 40.2812 58.6374H18.7188C18.4328 58.6374 18.1586 58.5238 17.9564 58.3216C17.7542 58.1195 17.6406 57.8452 17.6406 57.5593V55.403C17.6408 54.0075 18.1822 52.6663 19.151 51.6618C20.1198 50.6572 21.4404 50.0675 22.835 50.0167L23.2016 47.8281H3.625C2.76772 47.8264 1.94603 47.4851 1.33984 46.8789C0.733647 46.2727 0.392334 45.451 0.390625 44.5938V16.5625C0.392334 15.7052 0.733647 14.8835 1.33984 14.2774C1.94603 13.6712 2.76772 13.3298 3.625 13.3281H20.3014L20.972 11.3142C21.4483 9.88513 22.2508 8.58657 23.3159 7.52136L25.8193 5.01795ZM35.9688 52.1687H23.0312C22.1734 52.1687 21.3508 52.5094 20.7442 53.116C20.1376 53.7226 19.7969 54.5452 19.7969 55.403V56.4812H39.2031V55.403C39.2034 54.9782 39.1199 54.5575 38.9575 54.165C38.7951 53.7724 38.5568 53.4158 38.2564 53.1154C37.956 52.815 37.5994 52.5767 37.2068 52.4143C36.8143 52.2519 36.3936 52.1684 35.9688 52.1687ZM25.0236 50.0124H33.9764L33.6141 47.8281H25.3859L25.0236 50.0124ZM56.4531 43.5437H2.54688V44.5938C2.54688 44.8805 2.66116 45.1544 2.86169 45.3571C3.0648 45.5583 3.33905 45.6715 3.625 45.6719H55.375C55.6618 45.6719 55.9356 45.5576 56.1383 45.3571C56.3396 45.154 56.4527 44.8797 56.4531 44.5938V43.5437ZM45.1716 15.4844L46.2713 16.5841C46.8772 17.1921 47.2201 18.0137 47.2201 18.8719C47.2203 19.4185 47.082 19.9562 46.8181 20.4349C46.5543 20.9136 46.1733 21.3176 45.711 21.6092C45.2487 21.9007 44.72 22.0704 44.1743 22.1023C43.6286 22.1341 43.0837 22.0272 42.5906 21.7914L40.0872 24.2927C39.0226 25.3585 37.7238 26.1611 36.2943 26.6365L29.321 28.9631L28.7367 29.5453L34.0734 34.882C34.204 35.0116 34.2992 35.1726 34.3498 35.3495C34.4005 35.5263 34.405 35.7133 34.3628 35.8924C34.3206 36.0715 34.2332 36.2368 34.1089 36.3724C33.9846 36.5081 33.8277 36.6097 33.6529 36.6674L29.0795 38.1919C28.8894 38.2553 28.6855 38.2644 28.4904 38.2183C28.2954 38.1723 28.1171 38.0727 27.9755 37.931L24.1633 34.1187L23.4021 34.882C22.7947 35.4874 21.972 35.8274 21.1143 35.8274C20.2567 35.8274 19.434 35.4874 18.8266 34.882L12.7287 28.782C12.1229 28.1752 11.7826 27.3527 11.7826 26.4953C11.7826 25.6378 12.1229 24.8154 12.7287 24.2086L18.6476 18.2897L19.5812 15.4844H3.625C3.33905 15.4848 3.0648 15.5979 2.86169 15.7992C2.66041 16.0023 2.5473 16.2766 2.54688 16.5625V41.3874H56.4531V16.5625C56.4527 16.2766 56.3396 16.0023 56.1383 15.7992C55.9352 15.5979 55.6609 15.4848 55.375 15.4844H45.1716ZM25.6877 32.5942L29.0278 35.9343L31.3156 35.1731L27.2122 31.0698L25.6877 32.5942ZM19.5899 20.3963L14.2532 25.733C14.051 25.9352 13.9375 26.2094 13.9375 26.4953C13.9375 26.7812 14.051 27.0553 14.2532 27.2575L20.351 33.3575C20.5543 33.5576 20.8281 33.6697 21.1133 33.6697C21.3985 33.6697 21.6722 33.5576 21.8755 33.3575L27.2122 28.0208L19.5899 20.3963ZM27.2122 6.67395L24.8403 9.04583C24.0126 9.8746 23.3889 10.8844 23.0183 11.9956L20.8232 18.5808L29.0278 26.7874L35.613 24.5924C36.7245 24.2216 37.7344 23.597 38.5627 22.7682L40.9346 20.3963L27.2122 6.67395ZM44.7468 19.6352C44.949 19.433 45.0625 19.1588 45.0625 18.8729C45.0625 18.5871 44.949 18.3129 44.7468 18.1107L29.5 2.8617C29.2967 2.66167 29.023 2.54956 28.7378 2.54956C28.4526 2.54956 28.1788 2.66167 27.9755 2.8617C27.8751 2.96185 27.7955 3.08082 27.7411 3.2118C27.6868 3.34278 27.6588 3.4832 27.6588 3.62501C27.6588 3.76682 27.6868 3.90724 27.7411 4.03822C27.7955 4.16921 27.8751 4.28818 27.9755 4.38833L43.2224 19.6352C43.4257 19.8352 43.6994 19.9473 43.9846 19.9473C44.2698 19.9473 44.5436 19.8352 44.7468 19.6352ZM40.1131 10.4258L40.1734 10.3655C40.3658 10.1732 40.5183 9.94498 40.6224 9.69376C40.7265 9.44255 40.7801 9.17328 40.7801 8.90136C40.7801 8.62943 40.7265 8.36017 40.6224 8.10895C40.5183 7.85774 40.3658 7.62949 40.1734 7.43726L40.1691 7.43295C39.9774 7.24082 39.7497 7.08838 39.4991 6.98438C39.2484 6.88037 38.9797 6.82683 38.7083 6.82683C38.4369 6.82683 38.1681 6.88037 37.9175 6.98438C37.6668 7.08838 37.4391 7.24082 37.2474 7.43295L37.1827 7.49764L40.1131 10.4258Z"
                  fill="#E60168"
                />
              </svg>
            }
            title="Digital Marketing"
            readmore="Our digital marketing training in Limbe, Cameroon is a
        practical hands-on training that covers Digital Marketing
        Strategies, Search Engine Optimization-SEO, Content marketing,
        Social Media Marketing, Conversion Optimization, Digital Sale,
        Email marketing, Facebook advert, Pay Per Click -PPC, digital
        Analytics, Mobile Remarketing ETC This Digital Marketing
        course in Cameroon will transform you into a complete digital
        marketer with the ability to grow any business using digital
        marketing tools. Enroll in our Practical online Marketing
        Training In Limbe, Cameroon-Learn how to build a Winning
        Digital Marketing Strategy to attract new customers and
        increase sales and grow any type of business"
          />

          <CardComponent
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: "40px" }}
              >
                <path d="M12 24.002c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />
                <path d="M11.978 7.253h-.686c-.835.003-2.101.007-2.95-.277a.499.499 0 1 1 .316-.948c.694.231 1.909.225 2.631.225h.42c.728 0 1.938.006 2.631-.225a.5.5 0 1 1 .316.948c-.76.255-1.857.277-2.678.277z" />
                <path d="M15.5 23.002a.5.5 0 0 1-.471-.333l-5.5-15.5a.5.5 0 0 1 .942-.334l5.5 15.5a.5.5 0 0 1-.471.667zM17.5 20.002a.5.5 0 0 1-.476-.348l-4-12.5a.5.5 0 1 1 .952-.304l4 12.5a.5.5 0 0 1-.476.652zM3.977 7.253H3.5c-1.111 0-1.671-.275-1.731-.307a.501.501 0 0 1 .463-.887s.413.193 1.269.193h.208c.728.009 1.94.006 2.633-.225a.5.5 0 1 1 .316.949c-.762.254-1.858.277-2.681.277z" />
                <path d="M7.5 23.002a.5.5 0 0 1-.471-.333l-5.5-15.5a.5.5 0 0 1 .942-.334l5.5 15.5a.5.5 0 0 1-.471.667zM9.5 20.002a.5.5 0 0 1-.476-.348l-4-12.5a.5.5 0 1 1 .952-.304l4 12.5a.5.5 0 0 1-.476.652zM17.477 22.154l-.953-.304s1.805-5.658 2.977-9.348a.51.51 0 0 1 .021-.143c.37-1.241-.618-2.919-1.412-4.269C17.514 7.08 17 6.207 17 5.502c0-2.175 1.253-2.5 2-2.5 1.006 0 1.828.595 2.443 1.768.634 1.209.473 3.417-.466 6.383-1.042 3.292-3.5 11.001-3.5 11.001zM19 4.002c-.35 0-1 0-1 1.5 0 .432.494 1.271.971 2.082.45.764.956 1.623 1.283 2.5.893-3.167.52-4.436.304-4.849C19.979 4.13 19.391 4.002 19 4.002z" />
                <path d="M8.5 23.002a.502.502 0 0 1-.472-.665l3.5-10a.5.5 0 1 1 .944.33l-3.5 10a.5.5 0 0 1-.472.335z" />
              </svg>
            }
            title="Wordpress"
            readmore="Learn how to easily build websites using the most popular
        Content Management System. In one month, you will be able to
        fully understand how to build and host your website online
        using WordPress."
          />
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h3> We Love What we do and who we do it for</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            Our Practical one on one personalized training has set us as one of
            the best Computer training institutes in Cameroon
          </p>
        </div>
        <hr />
        <div>
          <br />
          <br />
          <Row>
            <Col lg={4} md={12}>
              <h3>Crafting effective digital marketing and UX design</h3>
              <p>
                As the best, IT training center in Cameroon our IT training
                courses are practical hands-on training where you learn IT
                skills that are in high demand from the beginning to advanced
                even if you have not touched a computer before.
                <br />
                <br />
                The world of information technology IT is growing rapidly, and
                in the years to come in this digital age, we are going to see
                even more of a demand for IT skills and IT-related jobs. We all
                have started seeing the dramatic impact information technology
                is having on the business world. Everything now revolves around
                Information technology. Many people fear losing their jobs to
                machines and technology, but the exciting component of this
                transition is that it will create new jobs in the process.
                <br />
                <br />
                What this means is that those who enroll in IT training courses
                and learn practical IT skills will have a better chance of being
                employed. Our IT training center in Cameroon is positioned with
                the state of the art IT training equipment.
              </p>

              <RegButton title="Register Now" />
              <br />
              <br />
              <br />
              <br />
            </Col>
            <br />
            <br />
            <Col lg={8} md={12} className="d-flex justify-content-center">
              <img src="./Images/dg3.jpeg" />
            </Col>
          </Row>
        </div>

        <h4 className="mt-5">Testimonials</h4>
        {/* <Row className="testimonials">
          <Col className="">
            <img src="./Images/Ellipse 3.png" className="ellipse" />
            <p>
              I am a product of DataGirl's bootcamp. The Full Stack Web
              Development bootcamp helped me start a career in tech
            </p>
          </Col>
          <Col>
            <img src="./Images/Ellipse 3.png" className="ellipse" />
            <p>
              I am a product of DataGirl's bootcamp. The Full Stack Web
              Development bootcamp helped me start a career in tech
            </p>
          </Col>
          <Col>
            <img src="./Images/Ellipse 3.png" className="ellipse" />
            <p>
              I am a product of DataGirl's bootcamp. The Full Stack Web
              Development bootcamp helped me start a career in tech
            </p>
          </Col>
        </Row> */}
        <Testimonial />
      </Container>
    </div>
  );
};

export default GetTrained;
