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

export default function Settings({ active }) {
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

  const increment = (type) => {
    if (!active) {
      switch (type) {
        case 'session':
          incrementSession(dispatch);
          break;
        case 'break':
          incrementBreak(dispatch)
          break;
        default:
          break;
      }
    }
  } 

  const decrement = (type) => {
    if (!active) {
      switch (type) {
        case 'session':
          decrementSession(dispatch);
          break;
        case 'break':
          decrementBreak(dispatch)
          break;
        default:
          break;
      }
    }
  }

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
            onClick={() => increment('session')}
            className="action-button"
            id="session-increment"
          >
            +
          </button>
          <button
            onClick={() => decrement('session')}
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
            onClick={() =>  increment('break')}
            id="break-increment"
            className="action-button"
          >
            +
          </button>
          <button
            onClick={() => decrement('break')}
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
