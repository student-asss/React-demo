import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import PortfolioImg from "../assets/img/background7c.jpg";
import Fade from 'react-reveal/Fade';

const About = () => {

  const [level, setLevel] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => newLevel >= 100 ? 0 : newLevel + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
    
  });

  // render() {
    return (
      <div className="about d-flex">
        <div className="container-fluid bcontent">
          <div className="row up">
            <div className="col-md-auto p-4 d-flex left">
              <Fade left>
                <img src={PortfolioImg} style={{ width: 320 }} />
              </Fade>

              {/* <div className="triangle">
                  <div className="arrow-left position-absolute"></div>
                  <div className="arrow-right position-absolute"></div>
                </div> */}
            </div>
            <div className="col-md p-4 d-flex right">
              <div className="boxText">
                <Fade top>
                  <h2>Biography</h2>
                </Fade>
                <Fade right>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <Fade top>
              <h2 className="skill-title">Skills</h2>
            </Fade>
            <div className="wrapper">
              <Fade left>
                <div className="card">
                  <span className="skill-percent">90%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={90}
                  />
                  <span className="skill-type">html</span>
                </div>
              </Fade>

              <Fade left>
                <div className="card">
                  <span className="skill-percent">80%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={80}
                  />
                  <span className="skill-type">css & scss</span>
                </div>
              </Fade>

              <Fade left>
                <div className="card">
                  <span className="skill-percent">70%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#f4c9b0', width: 125, height: 125 }} 
                    value={70}
                  />
                  <span className="skill-type">bootstrap</span>
                </div>
              </Fade>

              <Fade left>
                <div className="card">
                  <span className="skill-percent">40%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={40}
                  />
                  <span className="skill-type">javascript</span>
                </div>
              </Fade>

              <Fade left>
                <div className="card">
                  <span className="skill-percent">80%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={80}
                  />
                  <span className="skill-type">xd design</span>
                </div>
              </Fade>

              <Fade right>
                <div className="card">
                  <span className="skill-percent">50%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#f4c9b0', width: 125, height: 125 }} 
                    value={50}
                  />
                  <span className="skill-type">python</span>
                </div>
              </Fade>

              <Fade right>
                <div className="card">
                  <span className="skill-percent">80%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={80}
                  />
                  <span className="skill-type">MySql</span>
                </div>
              </Fade>

              <Fade right>
                <div className="card">
                  <span className="skill-percent">70%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={70}
                  />
                  <span className="skill-type">linux</span>
                </div>
              </Fade>

              <Fade right>
                <div className="card">
                  <span className="skill-percent">80%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#a59a86', width: 125, height: 125 }} 
                    value={80}
                  />
                  <span className="skill-type">windows</span>
                </div>
              </Fade>

              <Fade right>
                <div className="card">
                  <span className="skill-percent">60%</span>
                  <CircularProgress 
                    variant='determinate' 
                    style={{ color: '#f4c9b0', width: 125, height: 125 }} 
                    value={60}
                  />
                  <span className="skill-type">network</span>
                </div>
              </Fade>

            </div>
          </div>
        </div>
      </div>
    );
 }
// }
export default About;
