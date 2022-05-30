import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';
// Import medial
import banner from "../assets/banner2.jpg";
import PayGif from "../assets/payment.gif";
import AdmGif from "../assets/admin.gif";
import HisImg from "../assets/history.jpg";
import {
  faLinkedIn,
  faTwitter,
  faGithub,
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";


const Landing = () => {

    return (
      <div>
        <div className="container">
         <div className="jumbotron text-center">
              <h2>A Student Fees Mangement System</h2>
              <h5>Allows Schools collect Tuition Fees online</h5>
              <h5>Students and Parents Pay using Mobile Money</h5>
          </div>
          <div>
                <img className="embed-responsive-item" src={banner} alt="banner"/>
          </div>

        </div>
          <div className="container">
              <div className="jumbotron text-center">
                <h1 id="features">FEATURES</h1>
                <h3> Making Payments</h3>
                <p>Students can easily make points online using MTN mobile money</p>
                <img src={PayGif} alt="student payment gif"/>
                <br/>
                <br/>
                <br/>
                <h3> Adding Payment</h3>
                <p>Site administrators can add student payments </p>
                <img src={AdmGif} alt="admin payment gif"/>
                <br/>
                <br/>
                <br/>
                <h3> History</h3>
                <p>Students can view a history of their transactions</p>
                <img src={HisImg} alt="student history"/>
              </div>
          </div>

          <div className="container">
            <div className="jumbotron text-center">
              <h2 id="about">About The Project</h2>
              <p>This is my portfolio project for <a target="blank" href="https://www.holbertonschool.com/">Holberton School</a></p>
              Currently in Zambia most learning institutions now only recieve payments through the bank, we are faced with the following problems:
              <ul>
                <li> Long bank queues that leads to loss of many productive hours </li>
                <li> Labour-intensive tasks for schools such as recording and keeping track hundreds of bank slips</li>
                <li> Labour-intensive tasks for bank tellers of handling hundreds of student bill payments in a week</li>
                <li> Student's pressure of keeping bank slips and paper receipts </li>
              </ul>
              The project was inspired by the neeed to make the management of student fees more efficient. This project will benefit students, parents, schools
              and banks. The following are some of the benefits of this application:
            <div className="row">
                    <div className="col-sm-4">
                        <ul>
                          <li>Saves Time</li>
                          <li>More Efficient</li>
                          <li>Secure and Reliable</li>
                          <li>Low Risk of Theft</li>
                          <li>Eliminate Carbon Footprint</li>
                        </ul>
                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <ul>
                          <li>Reduces Labour</li>
                          <li>Quick and Easy Setup</li>
                          <li>Decreases Late Payments</li>
                          <li>Immediate Confirmation</li>
                          <li>Convenient Storage of Data</li>
                        </ul>
                    </div>
              </div>

              <br/>
              <br/>
              <h4 id="bio"> Developer Bio</h4>
              My name is Peter Sangwani Zyambo and I am a full-stack Web Application Developer and Software Engineer, currently living in Kitwe, Copperbelt, Zambia.
              My primary focus and inspiration for my studies is Web Development. In my free time, I study human computer interface and the psychology of human computer interaction.
              I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about software development,
              and strive to better myself as a developer, and the African developer community as a whole mostly here in my country Zambia.
              <br/>
              <br/>
              <h4> Languages</h4>
              I develop in C, C++, Python and Java though I primarily use Python. I develop both the back and front-end,
              and I am proficient in HTML/HTML5, CSS, JavaScript, React, jQuery and SQL/MySQL/PostgreSQL, to name a few.
              I have worked on desktop, web and mobile applications.
              <br/>
              <br/>
              <div className="row social-container" id="contact">
                <h3>Social Follow</h3>
                    <div className="col-sm-4">
                      <a href='https:www.linkedin.com/in/sangwani-pz' className='LinkedIn social'>
                        <FontAwesomeIcon icon="fab fa-LinkedIn" size="2x"/>
                      </a>

                    </div>
                    <div className="col-sm-4">
                    <a href="https://www.twitter.com/sangwani_zyambo" className="twitter social">
                      <FontAwesomeIcon icon="fab fa-Twitter" size="2x" />
                    </a>
                    </div>
                    <div className="col-sm-4">
                    <a href="https://www.gihub.com/sangwani-coder" className="github social">
                      <FontAwesomeIcon icon="fab fa-Github" size="2x" />
                    </a>
                    </div>
              </div>
              <br/>
              <br/>
              <h4> Project Repo</h4>
              <br/>
                <a href="https://github.com/sangwani-coder/portfolio_project" target="blank">Github</a>
            </div>
          </div>
    </div>
  );
};

export default Landing;