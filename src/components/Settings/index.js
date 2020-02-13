import React, { useRef } from "react";
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
  const modal = useRef(null);

  const setModal = () => {
    let currentModal = modal.current;
    let currentAttribute = currentModal.getAttribute("hidden");

    if (currentAttribute === "true" || currentModal.hasAttribute("hidden")) {
      currentModal.removeAttribute("hidden");
    } else {
      currentModal.setAttribute("hidden", true);
    }
  };

  return (
    <div>
      <div id="sidebar">
        <div className="item">
          <button onClick={() => setModal()}>
            <i className="fa fa-cog"></i>
          </button>
        </div>
      </div>
      <div
        id="wrapper-settings"
        className="scale-up-center"
        align="center"
        hidden={true}
        ref={modal}
      >
        <div id="session-wrapper">
          <label id="session-label">
            <span role="img" aria-label="tomato">
              🍅
            </span>{" "}
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
          <CardInfo
            name="Session"
            value={options.session}
            id="session-length"
          />
          <CardInfo name="Break" value={options.break} id="break-length" />
        </div>
      </div>
    </div>
  );
}
