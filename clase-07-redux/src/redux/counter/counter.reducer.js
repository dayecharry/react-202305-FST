import * as actions from './counter.actions';

const initial_state = {
  count: 1,
  increment: 10,
};

const countReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.COUNTER_INCREMENT: {
      const newState = { ...state, count: state.count + 1 };
      return newState;
    }

    case actions.COUNTER_DECREMENT: {
      const newState = { ...state, count: state.count - 1 };
      return newState;
    }

    default:
      return state;
  }
};

export default countReducer;
