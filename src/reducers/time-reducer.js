const SUB_TIME = 'SUB_TIME';
const RESET_TIME = 'RESET_TIME';
const SET_TIMER_ID = 'SET_TIMER_ID';

const initialState = {
  maxTime: 300,
  currentTime: 300,
  timerId: null
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_TIME:
      return {
        ...state,
        currentTime: state.currentTime - 1,
      };
    case SET_TIMER_ID:
      return {
        ...state,
        timerId: action.timerId,
      };
    case RESET_TIME:
      return initialState;
    default: return state;
  }
}

export const subTimeActionCreator = () => (
  {
    type: SUB_TIME,
  }
);

export const resetTimeActionCreator = () => (
  {
    type: RESET_TIME,
  }
);

export const setTimerIdActionCreator = timerId => (
  {
    type: SET_TIMER_ID,
    timerId: timerId,
  }
);