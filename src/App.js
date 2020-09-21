import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/RootReducer";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
