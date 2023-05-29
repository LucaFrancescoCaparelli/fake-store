import { useAppContext } from "./useAppContext";

function useFilterProducts({ products }) {
  const { filter, keyword } = useAppContext();

  let sortedProducts;
  if (filter === "price") {
    const p = [...products];
    sortedProducts = p.sort((a, b) => b.price - a.price);
  }

  if (filter === "asc") {
    const p = [...products];
    sortedProducts = p.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
    });
  }

  if (filter === "desc") {
    const p = [...products];
    sortedProducts = p.sort((a, b) => {
      if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return -1;
      }
    });
  }

  if (filter === "") {
    sortedProducts = [...products];
  }

  if (keyword) {
    sortedProducts = sortedProducts.filter((p) =>
      p.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return { sortedProducts };
}

export default useFilterProducts;
