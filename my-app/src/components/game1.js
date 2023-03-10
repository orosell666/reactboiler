import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import gameImage1 from "../images/headerNew3 (1).png";
import gameImage2 from "../images/cover.png"; 
import steamLogo from "../images/steamLogo.png";

const Game1 = () => {

    return (
        <div className="sectionStyle" id="scrollspyHeading1">
            <div className="d-flex d-row mb-2">
             <div className="banner-area img-fluid ">
            <Link to="/bethestar">
            <img src={gameImage1} className="col-6" />
            </Link><Link to="/travellers">
           <img src={gameImage2} className="col-6"/>
           </Link></div></div>

           <div className="container ">
           <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <button type="button" className="btn textColor1 col-sm-4 mt-5 steamBtn" ><h3 className="pt-2"><strong>SHOP   IN   STEAM   </strong><img src={steamLogo} width={50} height={50} className="steamLogoStyle"/></h3>
            </button>
            </Link>
           
           </div>
        </div>

        )

}

export default Game1;
