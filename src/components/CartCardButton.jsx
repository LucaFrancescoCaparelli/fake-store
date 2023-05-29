import { useAppContext } from "../hooks/useAppContext";

function CartCardButtons({ id, price, title, image, quantity }) {
  const {
    addProductCart,
    deleteProductCart,
    deleteOneProductCart,
    showNotification,
  } = useAppContext();

  const handleClickAddProduct = () => {
    addProductCart({ id, price, title, image, quantity });
    showNotification({ title: `${title} +1`, type: "success" });
  };

  const handleClickDeleteOneProduct = () => {
    deleteOneProductCart({ id, price, title, image, quantity });
    showNotification({
      title: `${title} ${quantity === 1 ? "" : "-1"}`,
      type: `${quantity === 1 ? "danger" : "success"}`,
    });
  };

  const handelDeleteProduct = () => {
    deleteProductCart(id);
    showNotification({ title, type: "danger" });
  };

  return (
    <>
      <button
        className='btn btn-circle btn-dark'
        onClick={handleClickAddProduct}
      >
        <i className='fa fa-plus' />
      </button>
      <button
        className='btn btn-circle btn-dark'
        onClick={handleClickDeleteOneProduct}
      >
        <i className='fa fa-minus' />
      </button>
      <button
        className='btn btn-circle btn-danger'
        onClick={handelDeleteProduct}
      >
        <i className='fa fa-trash' />
      </button>
    </>
  );
}

export default CartCardButtons;
