import "./Footer.scss"
import logo from "../../assets/Elearning_logo_png.png";
import facebook from "../../assets/facebook.svg";
import tweeter from "../../assets/twiter.svg";
import instagram from "../../assets/instagram.svg";
import { HashLink as Link } from "react-router-hash-link"

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-content">
            <img className="footer-logo" src={logo} alt="" />
            <ul className="menus">MENU
                <Link to="#about">About</Link>
                <Link to="#service">Services</Link>
                <Link to="#pricing">Pricing</Link>
                <Link to="#contact">Contact</Link>
            </ul>
            <ul className="menus">SERVICE
                <Link to="#">Design</Link>
                <Link to="#">Development</Link>
                <Link to="#">Marketing</Link>
                <Link to="#">See More</Link>
            </ul>
            <div className="social">
                <Link to="#"><img src={facebook} alt="" /></Link>
                <Link to="#"><img src={tweeter} alt="" /></Link>
                <Link to="#"><img src={instagram} alt="" /></Link>
            </div>
        </div>
        <span></span>
        <div className="copy-ryts">
                <p>Copyright 2023 elearning. All Rights Reserved</p>
                <div className="grouped">
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
        </div>
    </div>
  )
}

export default Footer