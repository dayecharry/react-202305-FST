export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const incrementCounter = () => (dispatch) => {
  const incrementAction = {
    type: COUNTER_INCREMENT,
  };
  dispatch(incrementAction);
};

export const decrementCounter = () => (dispatch) => {
  dispatch({
    type: COUNTER_DECREMENT,
  });
};
