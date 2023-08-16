import "./Pricing.scss";
import { HashLink as Link } from "react-router-hash-link";

function Pricing() {
  return (
        <div id="pricing" className="pricing-section">
            <div className="pricing-container">
                    <h4>PRICING</h4>
                    <h2>Check Our<br></br>Pricing Plans</h2>
            </div>
            <div className="pricing-container-2">
                <div className="pricing-2">
                    <div className="feat-professional">
                        <h4>CONSULTATION</h4>
                        <h3>Free</h3>
                        <p>Your digital marketing efforts. instead of handling in-house</p>
                        <ul>
                            <li className="active ">Brand Design</li>
                            <li className="normal">Market Analysis</li>
                            <li className="normal">Production</li>
                        </ul>
                        <Link className="btn-not-active" to="/">CONTACT US</Link>
                    </div>
                    <div className="feat-professional">
                        <div className="btn-sec" to="/">Popular</div>
                        <h4>DESIGN</h4>
                        <h3>$1500</h3>
                        <p>Provide your business with a variety of digital solutions to promote</p>
                        <ul>
                            <li className="active ">Brand Design</li>
                            <li className="normal">Market Analysis</li>
                            <li className="normal">Production</li>
                        </ul>
                        <Link className="btn-sec" to="/">CONTACT US</Link>
                    </div>
                    <div className="feat-professional">
                        <h4>DESIGN - CODE</h4>
                        <h3>$2900</h3>
                        <p>Provide your business with a variety of digital solutions to promote</p>
                        <ul>
                            <li className="active ">Brand Design</li>
                            <li className="normal">Market Analysis</li>
                            <li className="normal">Production</li>
                        </ul>
                        <Link className="btn-not-active" to="/">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pricing