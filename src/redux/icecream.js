const BUY_ICECREAM = "BUY_ICECREAM";
export const BuyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
const initialState = {
  noOfIceCream: 20,
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};
