const BUY_CAKE = "BUY_CAKE";
export const BuyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
const initialState = {
  noOfcakes: 10,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfcakes: state.noOfcakes - action.payload,
      };
    default:
      return state;
  }
};
