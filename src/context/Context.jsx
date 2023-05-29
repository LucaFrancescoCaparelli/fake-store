import { createContext } from "react";
import useAppReducer from "../hooks/useAppReducer";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const {
    state,
    filterProductsByKeyword,
    setProductFilter,
    addProductCart,
    deleteProductCart,
    deleteOneProductCart,
    showNotification,
    hideNotification,
    setProducts,
  } = useAppReducer();
  const values = {
    products: state.products,
    filter: state.filter,
    keyword: state.keyword,
    cart: state.cart,
    notification: state.notification,
    filterProductsByKeyword,
    setProductFilter,
    addProductCart,
    deleteProductCart,
    deleteOneProductCart,
    showNotification,
    hideNotification,
    setProducts,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
