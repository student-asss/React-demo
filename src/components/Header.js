import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadShake from 'react-reveal/HeadShake';

const Header = props => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const LinkCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (

      <nav className="navbar navbar-expand-md navbar-light rounded sticky-top">
        <a className="navbar-brand text-info font-weight-bolder" href="/">
        <HeadShake><span className="logo">D.</span></HeadShake>
        </a>
        <HeadShake>
          <button 
          className="custom-toggler navbar-toggler shadow-none" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarMenu" 
          aria-controls="navbarMenu" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation" onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </HeadShake>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarMenu">
          <Link to="/" className="nav-link ms-auto" aria-label="Toggle link-navigation" onClick={LinkCollapse}>Home</Link>
          <Link to="/about" className="nav-link" aria-label="Toggle link-navigation" onClick={LinkCollapse}>About</Link>
          <Link to="/portfolio" className="nav-link" onClick={LinkCollapse}>Portfolio</Link>
          <Link to="/contact" className="nav-link" onClick={LinkCollapse}>Contact</Link> 
        </div>
      </nav>
    );
  // }
}

export default Header;
