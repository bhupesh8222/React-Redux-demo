const BUY_CAKE = "BUY_CAKE";
export const BuyCake = () => {
  return {
    type: BUY_CAKE,
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
        noOfcakes: state.noOfcakes - 1,
      };
    default:
      return state;
  }
};
