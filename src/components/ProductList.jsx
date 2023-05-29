import useFilterProducts from "../hooks/useFilterProducts";
import Product from "./Product";

function ProductList({ products, title }) {
  const { sortedProducts } = useFilterProducts({ products });

  const totalProducts = `Total products: ${sortedProducts.length}`;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col d-flex text-start align-items-center'>
          <h2>{title}</h2>
          <span className='ms-4'>{totalProducts}</span>
        </div>
      </div>

      <div className='row justify-content-center'>
        {sortedProducts.map((product) => {
          const { id, title, price, description, category, image, rating } =
            product;
          return (
            <div key={id} className='col-10 col-md-6 col-lg-4 mb-4'>
              <Product
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
                category={category}
                rating={rating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
