function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }

    case "KEY_WORD": {
      return {
        ...state,
        keyword: action.payload,
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        openCart: !state.openCart,
      };
    }
    case "ADD_PRODUCT": {
      const exits = state.cart.findIndex((p) => p.id === action.payload.id);

      if (exits !== -1) {
        const newCart = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        return {
          ...state,
          cart: newCart,
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "REMOVE_PRODUCT": {
      const newCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: newCart,
      };
    }
    case "REMOVE_ONE": {
      if (action.payload.quantity === 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        return {
          ...state,
          cart: newCart,
        };
      }

      const newCart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      return {
        ...state,
        cart: newCart,
      };
    }
    case "SHOW_NOTIFICATION": {
      return {
        ...state,
        notification: {
          show: true,
          message: action.payload.title,
          type: action.payload.type,
        },
      };
    }
    case "HIDE_NOTIFICATION": {
      console.log("hdieee");
      return {
        ...state,
        notification: {
          show: false,
          message: "",
          type: "",
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
