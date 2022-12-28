import {
  DATA,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case DATA: {
      return { ...state, isLoading: false };
    }
    case ADD_TO_CART: {
      const index = state.cart.findIndex(
        (item) => item.id === action.payLoad.id
      );

      if (index >= 0) {
        return { ...state };
      }
      return {
        ...state,
        cart: [...state.cart, action.payLoad],
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
    case INCREASE_COUNT: {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payLoad) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: newCart };
    }
    case DECREASE_COUNT: {
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
