import React from "react";
import Fade from 'react-reveal/Fade';

class Footer extends React.Component {
    render() {
      return (

        <Fade bottom>
            <div className="footer">
                <p>&copy; 2021 [D.]</p>
            </div>
        </Fade>
        
      );
    }
  }
  
  export default Footer;