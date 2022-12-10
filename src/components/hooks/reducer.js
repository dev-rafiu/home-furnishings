import {
  DATA,
  CLOSE_MODAL,
  SHOW_DETAILS,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  INCREAMENT,
  DECREAMENT,
} from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case DATA: {
      return { ...state, isLoading: false };
    }

    case CLOSE_MODAL: {
      return { ...state, showModal: false };
    }

    case SHOW_DETAILS: {
      return {
        ...state,
        showModal: true,
        modalItem: { ...action.payLoad },
      };
    }

    case ADD_TO_CART: {
      const newItem = { ...action.payLoad };
      const index = state.cart.findIndex(
        (item) => item.id === action.payLoad.id
      );
      return index >= 0
        ? { ...state }
        : {
            ...state,
            cart: [...state.cart, newItem],
          };
    }

    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payLoad;
        }),
      };
    }

    case INCREAMENT: {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payLoad) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });

      return { ...state, cart: newCart };
    }

    case DECREAMENT: {
      const newCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payLoad) {
            return { ...cartItem, count: cartItem.count - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => {
          return cartItem.count > 0;
        });

      return { ...state, cart: newCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
};
