import { useAppContext } from "../hooks/useAppContext";
import Cart from "../components/Cart";
import FiltersContainer from "../components/FiltersContainer";
import Notification from "../components/Notification";
import ProductList from "../components/ProductList";
import Skeleton from "../components/Skeleton";
import { fetchAllProducts } from "../services/services";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useAppContext();

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='container d-flex flex-column justify-content-center text-center'>
      <FiltersContainer />
      {loading ? (
        <Skeleton />
      ) : (
        <ProductList products={products} title='Product List' />
      )}

      <Cart />
      <div className='toast-container position-fixed bottom-0 end-0 p-3'>
        <Notification />
      </div>
    </div>
  );
}

export default Home;
