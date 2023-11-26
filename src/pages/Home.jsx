import React from "react";
import Hero from "../componets/Hero";
import Brand from "../componets/Brand";
import Videoplay from "../componets/Videoplay";
import FeaturedProduct from "../componets/FeaturedProduct";
import BestSelling from "../componets/BestSelling";
import Workspace from "../componets/Workspace";
import NewProducts from "../componets/NewProducts";
import GamingFun from "../componets/GamingFun";
import GamingProduct from "../componets/GamingProduuct";
import Recommendation from "../componets/Recommendations";
Recommendation;

function Home() {
  return (
    <>
      <main className=" flex flex-col gap-8 bg-light">
        <Hero />
        <Brand />
        <Videoplay />
        <FeaturedProduct />
        <BestSelling />
        <Workspace />
        <GamingProduct />{" "}
        {/*replace with workspace products}
        {/* <NewProducts /> */}
        <GamingFun />
        <GamingProduct />
        <Recommendation />
      </main>
    </>
  );
}

export default Home;
