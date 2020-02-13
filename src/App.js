import React, { useEffect } from "react";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { Provider } from "react-redux";

import store from "./store";

import "./assets/styles/global.scss";
import "font-awesome/css/font-awesome.min.css";

function App() {
  useEffect(() => {
    document.title = "Pomodoro Clock";
  }, []);

  return (
    <Provider store={store}>
      <Timer />
      <Settings />
    </Provider>
  );
}

export default App;
