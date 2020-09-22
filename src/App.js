import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/RootReducer";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
