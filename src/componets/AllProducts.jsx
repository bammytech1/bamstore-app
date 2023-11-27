import { useGetAllProductsQuery } from "../redux/features/product/productsApi";
import ProductCard from "./ProductCard";

function AllProducts() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <section className="w-full   flex justify-center  ">
      <div className="container max-w-7xl flex flex-col item-center justify-center gap-8 p-6 ">
        <div className="w-full bg-pry-deep p-2">
          <h2 className=" max-w-3xl w-full  text-light text-left font-normal text-base md:text-lg">
            Monitor
          </h2>
        </div>

        <div className="grid  justify-between overflow-auto  grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred...</p>
          ) : (
            <>
              {data?.map((itemList) => {
                return <ProductCard itemList={itemList} key={itemList.id} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
