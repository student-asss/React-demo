import React from "react";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Spin from 'react-reveal/Spin';
import Footer from "../components/Footer";
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

const FiPhoneStyle = { fontSize: "21px", color: "#394039" };
const FiMailStyle = { fontSize: "21px", color: "#394039" };

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="container-fluid bcontent">
          <div className="row w-100">
            <div className="col-6 col-md-4 left">

              <div className="d-flex flex-row">
                <Flip>
                  <h2>Let's Talk</h2>
                </Flip>
              </div>
              
              <div className="d-inlane-flex flex-row-reverse contact-info">
                <Fade left>
                  <Jump>
                    <div className="info">
                      <Spin >
                        <FiPhone style={FiPhoneStyle} />
                        <p>+33 54545454</p>
                        <FiMail style={FiMailStyle} />  
                        <p>design@dev.com</p>
                      </Spin>
                    </div>
                  </Jump>
                </Fade>
                
              </div>
            </div>
            <Fade right>
              <div className="col-md-8 p-2 right">
                <form>
                  <div className="col">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none border-0"
                      // placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none border-0"
                      // placeholder="Last name"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control shadow-none border-0"
                        id="Email"
                        // placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control shadow-none border-0"
                      id="Message"
                      rows="3"
                      // placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn shadow-none">Submit</button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
