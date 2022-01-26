import Image from 'next/image';
import React from 'react';
import logo from '../../../Assets/Asset 16.png'

const Header = () => {
    return (
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Image
      alt="logo"
      src={logo}
      layout="intrinsic"
      width={125}
      height={33}
    />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="career">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">Contact Us</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
           
        </div>
    );
};

export default Header;

