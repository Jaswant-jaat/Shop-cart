import { ADD_TO_CART, REMOVE_TO_CART } from "../action/Constants";

const initialState = {
  cartData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.data],
      };

    case REMOVE_TO_CART:
      // for(let i = 0; i < state.cartData.length; i++){
      //     if(state.cartData[i].name === action.data.name){
      //         state.cartData.splice(i, 1);
      //         break;
      //     }
      // }
      let i = state.cartData.length - 1;
      while (i >= 0) {
        if (state.cartData[i].name === action.data.name) {
          state.cartData.splice(i, 1);
          break;
        }
        i--;
      }
      return {
        ...state,
        cartData: [...state.cartData],
      };

    default:
      return state;
  }
};

export default reducer;
