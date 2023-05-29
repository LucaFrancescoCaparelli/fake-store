import CartCardButtons from "./CartCardButton";

function CartProductCard({ id, price, title, image, quantity }) {
  const formattedPrice = `€ ${price * quantity}`;
  const formattedTitle = title.split(" ").slice(0, 4).join(" ");
  return (
    <div className='cart-dialog-content'>
      <div className='card d-flex flex-row'>
        <div className='d-flex flex-column justify-content-center'>
          <img src={image} alt={formattedTitle} />
        </div>
        <div className='d-flex flex-column flex-grow-1'>
          <div className='cart-card-product-title text-start'>
            {formattedTitle}
          </div>
          <div className='d-flex flex-row gap-1 mt-3'>
            <div className='d-flex flex-row flex-grow-1 gap-1 align-items-center'>
              <strong> {quantity}</strong>
              <small>x</small>
              <div className='cart-card-product-price'>{formattedPrice}</div>
            </div>
            <CartCardButtons
              id={id}
              price={price}
              title={title}
              image={image}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
