import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>UAE Head-Office</h4>
          <p>Office Address: Office # 218, 2nd Floor Al-Mur Shaikh
                    Marjan Sultan Building Frij Al Murar
                    P.O Box 380730 Deira, Dubai U.A.E</p>
          <p>Phone:  +971-42509096</p>
          <p>Fax: +971-42509097</p>
        </div>
        <div className="footer-section">
          <h4>PAK, ISLB</h4>
          <p>Office Address: Office #3, 1st Floor, Janjua
                      Plaza, Plot No, 2-D, I-9 Markaz
                      Islamabad, Pakistan</p>
          <p>Phone: +92-51-4858276</p>
          <p>Fax: +92-51-4858275</p>
        </div>
        <div className="footer-section">
          <h4>PAK, KAR</h4>
          <p>Office Address: Office # 406, 4th Floor, Anum Empire,
                      K.C.H.S, Block 7/8, Main Shahra-e-Faisal
                      Karachi, Pakistan</p>
          <p>Phone: +92-21-34150621-24</p>
          <p>Fax: +92-21-34150625</p>
        </div>
        <div className="footer-section">
          <h4>PAK, LAH</h4>
          <p>Office Address: Office # 16 2nd Floor Big City Mall Liberty 
                      Round About Main Boulevrd 
                      Lahore Pakistan</p>
          <p>Phone: +92-42-35754660-1</p>
          <p>Fax:  +92-42-35754660-1</p>
        </div>
      </div>
      <div className="footer-email">
        <p>Email: Babar@rawalfreight.com</p>
        <p>
        <span style={{ color: "black", marginLeft: "10px" }}>
          Credits: 
          <a href="https://www.freepik.com/free-vector/continents-world-background_16351373.htm#query=dotted%20world%20map&position=1&from_view=keyword&track=ais">
            <img src="./freepik-logo.png" alt="Freepik" style={{ width: "25px", height: "25px" }}/>
          </a>
          <span style={{ color: "black", marginLeft: "5px" }}>
            Image by rawpixel.com
          </span>
          <a href="https://www.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_13180331.htm#query=cargo%20ship&position=3&from_view=keyword&track=ais">
            <img src="./freepik-logo.png" alt="Freepik" style={{ width: "25px", height: "25px" }}/>
          </a>
          <span style={{ color: "black", marginLeft: "5px" }}>
            Image by tawatchai07
          </span>
          <a href="https://create.vista.com/home/">
            <img src="./vista-logo.png" alt="Vista" style={{ width: "25px", height: "25px" }}/>
          </a>
          <span style={{ color: "black", marginLeft: "5px" }}>
            Vista Editor
          </span>
        </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
