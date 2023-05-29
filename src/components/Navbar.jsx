import { useAppContext } from "../hooks/useAppContext";

function Navbar() {
  const { cart } = useAppContext();
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='#'
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          FAKE STORE - CONTEXT API
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          {/* <div className='navbar-nav'>
            <a className='nav-link' aria-current='page' href='#'>
              All categories
            </a>
          </div> */}
          <div
            className='navbar-nav'
            style={{ width: "30%", justifyContent: "end" }}
          >
            {/* <div className='header-user-button'>
              <button
                className='btn btn-primary'
                data-bs-toggle='offcanvas'
                // data-bs-target='.user-dialog'
              >
                <i className='fa-solid fa-fw fa-lg fa-user'></i>
                <span className='d-none d-lg-inline fw-bold'>Mi Cuenta</span>
              </button>
            </div> */}
            <div className='header-user-button'>
              <button
                className='btn btn-primary'
                style={{ color: "white" }}
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasExample'
                aria-controls='offcanvasExample'
              >
                <i
                  className='fa-solid fa-bag-shopping'
                  style={{ marginRight: "5px" }}
                />
                <span className='d-none d-lg-inline fw-bold'>Cart</span>
                <span
                  className='badge text-bg-danger'
                  style={{ marginLeft: "5px" }}
                >
                  {cart.length >= 10 ? "+10" : cart.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
