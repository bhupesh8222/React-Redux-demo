import React from "react";
import { BuyIceCream } from "../redux/icecream";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>The No of Icecream are : {props.icecream}</h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    icecream: state.icecream.noOfIceCream, //maps the state of redux with the props called cake
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyIceCream: () => dispatch(BuyIceCream()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
