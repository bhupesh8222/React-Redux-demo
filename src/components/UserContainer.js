import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/users";
function UserContainer(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>Error</h2>
  ) : (
    <div>
      {props.userData.users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
