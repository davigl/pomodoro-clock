import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetBoth } from "../../actions/settings";
import { Circle } from "rc-progress";

import "./styles.scss";

export default function Timer() {
  const dispatch = useDispatch();
  const options = useSelector(state => {
    return state.settings;
  });
  const beep = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [unitPercent, setUnitPercent] = useState(0);
  const [currentTimer, setCurrentTimer] = useState("Session");

  const formatedTime = () => {
    let { session } = options;
    let current = active ? minutes : session;

    let output = `${current < 10 ? `0${current}` : current}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;

    return output;
  };

  const resetPercentage = parameter => {
    setPercentage(0);
    setUnitPercent(100 / (parameter * 60));
  };

  const resetTimer = () => {
    beep.current.currentTime = 0;
    beep.current.pause();

    setCurrentTimer("Session");
    setActive(false);
    setSeconds(0);

    resetBoth(dispatch);
  };

  useEffect(() => {
    let { session } = options;

    setMinutes(session);
    setSeconds(0);
    setActive(false);
    resetPercentage(session);
  }, [options]);

  useEffect(() => {
    let sessionTime = options.session;
    let breakTime = options.break;

    const adjustTimer = interval => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      }
    };

    const timerRunning = () => {
      if (active) {
        if (seconds === 0 && minutes === 0) {
          beep.current.play();

          if (currentTimer === "Session") {
            setCurrentTimer("Break");
            setMinutes(breakTime);
            resetPercentage(breakTime);
          } else {
            setCurrentTimer("Session");
            setMinutes(sessionTime);
            resetPercentage(sessionTime);
          }
        }

        adjustTimer(interval);
        setPercentage(percentage => percentage + unitPercent);
      }
    };

    const interval = setInterval(() => {
      timerRunning();
    }, 1000);

    return () => clearInterval(interval);
  }, [active, currentTimer, minutes, options, seconds, unitPercent]);

  return (
    <div id="timer-wrapper">
      <div align="center">
        <div id="timer-label">
          <strong>{currentTimer}</strong>
        </div>
        <div id="time-left">{formatedTime()}</div>
        <div style={{ fontSize: 25, marginTop: 15 }}>
          Are you <strong>Ready</strong>?
        </div>
        <div style={{ marginTop: 10 }}>
          <Circle
            percent={percentage}
            strokeWidth="10"
            trailWidth="10"
            trailColor="#54C8E0"
            strokeColor="#FFFFFF"
          />
          <div style={{ padding: 10 }}>
            <button
              id="start_stop"
              onClick={() => setActive(active => !active)}
            >
              {active ? (
                <i className="fa fa-stop" />
              ) : (
                <i className="fa fa-play" />
              )}
            </button>

            <button id="reset" onClick={() => resetTimer()}>
              <i className="fa fa-refresh" />
            </button>
          </div>
        </div>
      </div>
      <audio id="beep" src="https://goo.gl/65cBl1" ref={beep}></audio>
    </div>
  );
}
