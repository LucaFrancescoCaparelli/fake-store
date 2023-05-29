import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";

function Notification() {
  const { notification, hideNotification, cart } = useAppContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!notification.show) return;
      hideNotification();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [cart]);

  return (
    <>
      {notification.show && (
        <div
          className={`toast align-items-center text-bg-${notification.type} border-0 show`}
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='d-flex'>
            <div className='toast-body'>{notification.message}.</div>
            <button
              onClick={() => hideNotification()}
              type='button'
              className='btn-close btn-close-white me-2 m-auto'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
        </div>
      )}
    </>
  );
}
export default Notification;
