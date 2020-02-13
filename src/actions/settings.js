export const BREAK_INCREMENT = "BREAK_INCREMENT";
export const BREAK_DECREMENT = "BREAK_DECREMENT";
export const SESSION_INCREMENT = "SESSION_INCREMENT";
export const SESSION_DECREMENT = "SESSION_DECREMENT";
export const RESET = "RESET";

export const incrementBreak = dispatch => {
  dispatch({ type: BREAK_INCREMENT });
};

export const decrementBreak = dispatch => {
  dispatch({ type: BREAK_DECREMENT });
};

export const incrementSession = dispatch => {
  dispatch({ type: SESSION_INCREMENT });
};

export const decrementSession = dispatch => {
  dispatch({ type: SESSION_DECREMENT });
};

export const resetBoth = dispatch => {
  dispatch({ type: RESET });
};
