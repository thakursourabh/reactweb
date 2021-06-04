import React from 'react';
import web from '../src/images/about-pg.jpg';
import { NavLink } from "react-router-dom";
const About = () => {
    return(
      <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>Welcome to about page <strong className="brand-name"> Sourabh</strong></h1>
                    <h2 className="my-3">
                        we are here to make your work easy
                    </h2>
                    <div className="mt-3">
                        <NavLink to="/contact" className="btn-get-started">Contact Us</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} alt="" className="img-fluid animated"/>
                </div>
                </div>
             
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default About;