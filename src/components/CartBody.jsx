import CartProductCard from "./CartProductCard";

function CartBody({ cart }) {
  const noProducst = "There are no products in the cart";
  return (
    <>
      {cart.length ? (
        cart.map((p) => {
          const { id, price, title, image, quantity } = p;
          return (
            <CartProductCard
              key={p.title}
              id={id}
              price={price}
              title={title}
              image={image}
              quantity={quantity}
            />
          );
        })
      ) : (
        <p>{noProducst}</p>
      )}
    </>
  );
}

export default CartBody;
