import { useAppContext } from "../hooks/useAppContext";

function Product({ id, title, description, image, price, category, rating }) {
  const { addProductCart, showNotification } = useAppContext();

  const formattedTitle = title.split(" ").slice(0, 4).join(" ");
  const formattedPrice = `€ ${price}`;
  const buttonText = "Add to cart";

  const handleClick = () => {
    addProductCart({
      id,
      title,
      description,
      image,
      price,
      quantity: 1,
      category,
      rating,
    });
    showNotification({ title: `${title} +1`, type: "success" });
  };

  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='card-body d-flex flex-column justify-content-between align-'>
        <h5 className='card-title'>{formattedTitle}</h5>
        <div>
          <p className='card-text'>{formattedPrice}</p>
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Product;
