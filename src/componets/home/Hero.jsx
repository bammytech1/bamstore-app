import heroImage from "../../assets/hero-image.svg";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="   w-full flex justify-center items-center p-6 bg-none  mt-20 md:mt-40 ">
      <div className="container  w-full max-w-7xl place-content-center  grid md:grid-cols-2">
        <motion.picture
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className=" order-1"
        >
          <img src={heroImage} className=" w-full h-auto" alt="" />
        </motion.picture>
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="flex flex-col max-w-lg md:py-20 lg:py-36 gap-4 justify-center items-center md:items-start"
        >
          <p className="text-sm text-dark text-center md:text-left">
            Best Product
          </p>
          <h1 className="text-4xl text-dark text-center md:text-left md:text-4xl lg:text-5xl text-700">
            Get Quality Gadgets, <br></br>
            <span className="text-5xl text-pry-color">Forget</span> The Rest...
          </h1>
          <p className="text-sm text-dark text-center md:text-left">
            Bamstore provides a full service range including technical skils,
            design, business understanding fujhthjkndfghusdgnj gaduihgjkhegrueir
            adfyuhtearyjkt
          </p>
          <div className="">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-pry-color px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-900 active:bg-blue-950"
              to="/"
            >
              <Link to="/ourstore">Explore Now</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
