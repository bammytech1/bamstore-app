import { createContext } from "react";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";

export const ShopContext = createContext(null);

const shopContextProvider = (props) => {
  const { data } = useGetAllProductsQuery();

  const contextValue = { data };
  console.log(contextValue);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default shopContextProvider;
