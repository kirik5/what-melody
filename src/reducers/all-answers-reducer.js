const PUSH_ANSWER = 'PUSH_ANSWER';
const CLEAR_ANSWERS = 'CLEAR_ANSWERS';

const initialState = {
  answers: [],
};

export const allAnswersReducer = (state = initialState, action) => {
  switch (action.type) {

    case PUSH_ANSWER: {

      return {
        ...state,
        answers: [...state.answers, action.valueOfAnswer],
      }
    }

    case CLEAR_ANSWERS: {
      return initialState;
    }

    default:
      return state;
  }
}

export const pushAnswerActionCreator = (answer) => (
  {
    type: PUSH_ANSWER,
    valueOfAnswer: answer,
  }
);

export const clearAnswersActionCreator = () => ({
  type: CLEAR_ANSWERS,
})