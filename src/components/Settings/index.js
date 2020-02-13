import React from "react";
import CardInfo from "../CardInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
} from "../../actions/settings";

import "./styles.scss";

export default function Settings() {
  const dispatch = useDispatch();
  const options = useSelector(state => {
    return state.settings;
  });

  return (
    <div id="wrapper-settings" align="center">
      <div>
        <label id="session-label">
          <span role="img" aria-label="tomato">
            🍅
          </span>
          Session Length
        </label>
        <button
          onClick={() => incrementSession(dispatch)}
          className="action-button"
          id="session-increment"
        >
          +
        </button>
        <button
          onClick={() => decrementSession(dispatch)}
          className="action-button"
          id="session-decrement"
        >
          -
        </button>
        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
      </div>
      <div>
        <label id="break-label">
          <span role="img" aria-label="tomato">
            ☕
          </span>{" "}
          Break Length
        </label>

        <button
          onClick={() => incrementBreak(dispatch)}
          id="break-increment"
          className="action-button"
        >
          +
        </button>
        <button
          onClick={() => decrementBreak(dispatch)}
          id="break-decrement"
          className="action-button"
        >
          -
        </button>
      </div>
      <div id="infos-container">
        <CardInfo name="Session" value={options.session} id="session-length" />
        <CardInfo name="Break" value={options.break} id="break-length" />
      </div>
    </div>
  );
}
