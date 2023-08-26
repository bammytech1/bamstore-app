import heroImage from "../../assets/hero-image.svg";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gray-bk w-full flex justify-center items-center p-6 bg-none mt-20 ">
      <div className="w-full max-w-7xl place-content-center  grid grid-cols-2">
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
          className="flex flex-col max-w-lg gap-3 justify-center"
        >
          <p className="text-sm">Best Product</p>
          <h1 className="text-5xl">
            Get Quality Gadgets, <br></br><span className="text-5xl text-pry-color">Forget</span> The Rest...
          </h1>
          <p className="text-sm">
            Bamstore provides a full service range including technical skils,
            design, business understanding fujhthjkndfghusdgnj gaduihgjkhegrueir
            adfyuhtearyjkt
          </p>
          <div className="btn-group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-sec"
              to="/"
            >
              <Link to="/">Explore Now</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
