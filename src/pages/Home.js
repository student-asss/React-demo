import React from "react";
import CV from "../docs/resume.pdf";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

class Home extends React.Component {
  render() {
    return (
      <section className="home h-100 d-flex">
        <div className="container-fluid d-flex">
        <Fade bottom>
            <div className="hero position-relative">
              <div className="hero-text position-absolute">
                <h1><span>Hi,</span> I'm Dragan</h1>
                <h1>Student of Information <span>Technology</span></h1>
                <p className="sub-text">I am looking for a place that will allow me further training.</p>
                <Fade left>
                  <Link to={ CV } target = "_blank" className="resume position-absolute">
                    Resume
                  </Link>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Home;
