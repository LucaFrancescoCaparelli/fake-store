import { useAppContext } from "../hooks/useAppContext";
import CartBody from "./CartBody";

function Cart() {
  const { cart } = useAppContext();

  const title = "Cart";

  return (
    <>
      <div
        className={`offcanvas offcanvas-end`}
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            {title}
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <CartBody cart={cart} />
        </div>
      </div>
    </>
  );
}

export default Cart;
