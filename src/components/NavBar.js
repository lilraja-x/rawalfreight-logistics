import React, { useState } from "react";
import "./styles/Navigation.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id, event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    handleClick();
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="/"
            className="nav-logo"
            onClick={(event) => scrollToSection("home", event)}
          >
            <b>RawalFreight Corporate</b>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                className="nav-links"
                onClick={(event) => scrollToSection("home", event)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-links"
                onClick={(event) => scrollToSection("about", event)}
              >
                About
              </a>
            </li>
            <li class="dropdown">
              <button class="dropbtn">Services
              </button>
              <div class="dropdown-content">
                <a href="#gcs-nvocc-services" 
                className="nav-links"
                onClick={(event) => scrollToSection("gcs-nvocc-services", event)}>
                  Global Consolidation and Ocean Services
                </a>
                <a href="#afs-rt-services"
                className="nav-links"
                onClick={(event) => scrollToSection("afs-rt-services", event)}>
                  Air Freight and Road Transportation Services
                </a>
                <a href="#sea/airct-att-services"
                className="nav-links"
                onClick={(event) => scrollToSection("sea/airct-att-services", event)}>
                  Sea/Air Combined Transport and Afghan Transit Trade
                </a>
                <a href="#shcl-et-services"
                className="nav-links"
                onClick={(event) => scrollToSection("shcl-et-services", event)}>
                  Exhibiting Cargo and Ship Handling: Charter & Liner Agency
                </a>
              </div>
            </li> 
            <li className="nav-item">
              <a
                href="#mission"
                className="nav-links"
                onClick={(event) => scrollToSection("mission", event)}
              >
                Mission
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#costumer-support"
                className="nav-links"
                onClick={(event) => scrollToSection("costumer-support", event)}
              >
                Customer Support
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact-us"
                className="nav-links"
                onClick={(event) => scrollToSection("contact-us", event)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

