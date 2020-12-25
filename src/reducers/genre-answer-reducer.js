const ADD_ANSWER = 'ADD_ANSWER';
const CLEAR_ANSWER = 'CLEAR_ANSWER';

const initialState = {
  answers: [false, false, false, false],
};

export const genreAnswerReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ANSWER: {
      const newAnswers = [...state.answers];
      newAnswers[action.numberOfActiveAnswer] = !(newAnswers[action.numberOfActiveAnswer])

      return {
        ...state,
        answers: newAnswers,
      }
    }

    case CLEAR_ANSWER: {
      return initialState;
    }

    default:
      return state;
  }
}

export const addAnswerActionCreator = (number) => (
  {
    type: ADD_ANSWER,
    numberOfActiveAnswer: number,
  }
);

export const clearAnswerActionCreator = () => ({
  type: CLEAR_ANSWER,
})