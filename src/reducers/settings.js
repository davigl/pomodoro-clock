import {
  BREAK_DECREMENT,
  BREAK_INCREMENT,
  SESSION_INCREMENT,
  SESSION_DECREMENT,
  RESET
} from "../actions/settings";

const INITIAL_STATE = {
  break: 5,
  session: 25,
  visible: false
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BREAK_DECREMENT:
      if (state.break > 1) return { ...state, break: state.break - 1 };
      else return state;
    case BREAK_INCREMENT:
      if (state.break < 60) return { ...state, break: state.break + 1 };
      else return state;
    case SESSION_DECREMENT:
      if (state.session > 1) return { ...state, session: state.session - 1 };
      else return state;
    case SESSION_INCREMENT:
      if (state.session < 60) return { ...state, session: state.session + 1 };
      else return state;
    case RESET:
      return { ...state, break: 5, session: 25 };
    default:
      return state;
  }
};

export default settingsReducer;
