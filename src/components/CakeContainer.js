import React from "react";
import { BuyCake } from "../redux/cake";
import { connect } from "react-redux";
function CakeContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>The No of Cakes are : {props.cake}</h1>
      <button onClick={props.buycake}>Buy Cake</button>
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
    buycake: () => dispatch(BuyCake()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
