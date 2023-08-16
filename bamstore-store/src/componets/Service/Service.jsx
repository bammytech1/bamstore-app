import "./Service.scss";
import design from "../../assets/design.svg";
import marketing from "../../assets/marketing.svg";
import development from "../../assets/development.svg";
import { HashLink as Link } from "react-router-hash-link";

function Service() {
  return (
        <div id="service" className="service-section">
            <div className="service-container">
                    <h4>SERVICE</h4>
                    <h2>How Our Agency<br></br> Can Help</h2>
            </div>
            <div className="service-container-2">
                <div className="service-2">
                    <div className="feat-professional">
                        <img src={design} alt="" />
                        <h3>Design</h3>
                        <p>Full service range including technical skills, design.</p>
                        <Link to="/">Learn More</Link>
                    </div>
                    <div className="feat-professional">
                        <img src={development} alt="" />
                        <h3>Development</h3>
                        <p>Full service range including technical skills, design.</p>
                        <Link to="/">Discover More</Link>
                    </div>
                    <div className="feat-professional">
                        <img src={marketing} alt="" />
                        <h3>Marketing</h3>
                        <p>Full service range including technical skills, design.</p>
                        <Link to="/">Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Service