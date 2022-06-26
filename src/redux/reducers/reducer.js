
import { addItemToCart, removeItemFromCart } from "../utils";



const INIT_STATE = {
  cartItems: [],
  
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      case "RMV_CART": 
      const data = state.cartItems.filter((el)=>el.id !== action.payload.id);

      return {
            ...state,
            cartItems: data
      };

      case "DEC_ITEMS" :
       
        return {
          ...state,
          cartItems : removeItemFromCart(state.cartItems,action.payload)
        }


    default:
      return state;
  }
};





