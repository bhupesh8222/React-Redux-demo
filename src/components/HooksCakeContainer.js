import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCake } from "../redux/cake";
function HooksCakeContainer() {
  const numOfcake = useSelector((state) => state.noOfcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Cake- {numOfcake}</h1>
      <button
        onClick={() => {
          dispatch(BuyCake());
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
