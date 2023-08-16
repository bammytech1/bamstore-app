import "./Portfolio.scss";
import portfolioData from '../../data'
import { HashLink as Link } from "react-router-hash-link";
import connectUs from "../../assets/connect-us.svg";
import block from "../../assets/block.png";
import Team from "../Team/Team";

function Portfolio() {
    return (
            <section id="portfolio" className="folio-section">
                    <h4>PORTFOLIO</h4>
                    <h2>Latest Work</h2>
                <div className="folio-container">
                        {portfolioData.map(data => {
                            return (
                                <PortfolioItem {...data} key={data.id}/>
                            )

                        })}
                </div>
                <div className="get-started">
                    <div className="get-started-info">
                        <h4>Get Started</h4>
                        <h3>We Help Companies <br></br>Move Faster</h3>
                        <Link to="#contact" className="btn-sec">CONTACT US</Link>
                    </div>
                    <img src={block} alt="" />
                    <img className="connect-image" src={connectUs} alt="" />
                </div>
                <Team />          
            </section>
            )
    }
    
    const PortfolioItem = (props) => {
        const {coverImage, category, title} = props;
        return (
            <div className="card-item">
                <img className="card-image" src={coverImage} alt="" />
                <div className="card-details">
                    <p>{category}</p>
                    <h3>{title}</h3>
                </div>
            </div>
        )
    }





export default Portfolio