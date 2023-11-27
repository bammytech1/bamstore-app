import React from "react";
import { NewItems } from "../datas/productData";
import ProductCard from "./ProductCard";

function GamingProduct() {
  return (
    <section className="w-full   flex justify-center  ">
      <div className="container max-w-7xl flex flex-col item-center justify-center gap-8 p-6 ">
        <div className="grid  justify-between overflow-auto  grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {NewItems.map((itemList) => {
            return <ProductCard itemList={itemList} key={itemList.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default GamingProduct;
