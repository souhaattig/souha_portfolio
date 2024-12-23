import React from "react";
import Profile from "../../assets/home.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Home.css' ; 

const Home = () => {
  return (
 
    <section className="home section grid">
      <img src={Profile} alt='' className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"> 
            <span>  I'm Souha ATTIG. </span>    
          </h1>
          <p className="home__description">
          I'm Souha Attig, a Front-End Developer with a strong passion for graphic web integration. Combining creativity with technical expertise, I specialize in building visually appealing and user-friendly web interfaces.
          </p> 
          <Link to='/about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link> 
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
    

  );
};

export default Home;
