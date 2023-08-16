// Home.js
import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
     <div>
     \
     </div>
      {/* Hero Start */}
      <div className="hero-header" id="home">
        <div className="container">
          <div className="content">
            <h1>Welcome to TeleHealth</h1>

            <p>
              The Best Health Care Solution In Your City, <br />
              With affordable and budget-friendly prices for medical attention
            </p>

            <div className="links">
              <Link to='#'>
                Find a Doctor
              </Link>
              <Link to='#'>
                Appointment
              </Link>
            </div>
            
            <div className="hero-section"></div>
          </div>
          <div className="hero">
            <img src="./team-1.jpg" alt="" className="hero-img" />
          </div>
        </div>
      </div>
      {/* Hero End */}

      <div className="content-2">
        <div className="next">
         <Link to='/about'>
            Next Page<i className="fa fa-solid fa-bounce fa-arrow-right"></i>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
