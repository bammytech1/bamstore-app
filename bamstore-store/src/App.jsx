import Header from "./componets/Header/Header";
import Hero from "./componets/Hero/Hero";
// import About from './componets/About/About';
// import HowWeWork from './componets/HowWeWork/HowWeWork';
// import Features from './componets/Features/Features';
// import Service from './componets/Service/Service';
// import Portfolio from './componets/Portfolio/Portfolio';
// import FeedBack from './componets/Feedback/FeedBack';
// import Pricing from './componets/Pricing/Pricing';
// import Faq from './componets/FAQ/Faq';
// import ReachUs from './componets/ReachUs/ReachUs';
// import Footer from './componets/Footer/Footer';
// import ContactUS from './componets/Contact/ContactUs';
// import Slider from './Slider/Slider';

import "./style.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      {/*<About />
      <HowWeWork />
      <Features />
      <Service />
      <Portfolio />
      <FeedBack />
      <Pricing />
      <Faq />
      <ReachUs />
      <ContactUS />
      <Footer /> */}
    </Router>
  );
}

export default App;
