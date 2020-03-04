import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Timer from "./components/Timer";

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
    </Provider>
  );
}

export default App;
