
// import { HashLink as Link } from "react-router-hash-link"
import pics3 from "../../assets/pics3.png";
import icon1 from "../../assets/icon1.svg";
import "./Features.scss";
import { HashLink as Link } from "react-router-hash-link";

function Features() {
  return (
    <div id="" className="features-section">
        <div className="features-container">
            <picture>
            <img src={pics3} className="features-image" alt="" />
            </picture>
            <div className="features-content">
                <h4>FEATURES</h4>
                <h2>Give your site a New Look</h2>
                <p>Ability to put meant to partner on theork as an extension of the marchants team.</p>
                
                <ul className='features-list'>
                    <li className='features-details'>Range including technical Skills</li>
                    <li className='features-details'>Business UnderStanding</li>
                    <li className='features-details'>Partner on the long run</li>
                </ul>
                
            </div>
        </div>
        <div className="features-container-2">
            <div className="features-more">
                <p>Long run, and work as an extension of the marchants team</p>
                <Link to="/">Read More</Link>
            </div>
            <div className="features-2">
                <div className="feat-professional">
                    <img src={icon1} alt="" />
                    <h3>Professional</h3>
                    <p>Full service range including technical skills, design.</p>
                </div>
                <div className="feat-access">
                    <h3>Accessibility</h3>
                    <p>Business understanding, ability to put themselves</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Features