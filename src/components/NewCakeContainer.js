import React, { useState } from "react";
import { BuyCake } from "../redux/cake";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>The No of Cakes are : {props.cake}</h1>
      <input
        value={number}
        type="text"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buycake(number)}>Buy {number} Cake</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cake: state.cake.noOfcakes, //maps the state of redux with the props called
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buycake: (number) => dispatch(BuyCake(number)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
