export const ADD_NUMBER_OF_ACTIVE_QUESTION = 'ADD_NUMBER_OF_ACTIVE_QUESTION';
export const SUB_LIVES = 'SUB_LIVES';


const actionCreator = {
  incrementActiveQuesiton: () => ({
    type: ADD_NUMBER_OF_ACTIVE_QUESTION,
    payload: 1,
  }),
  subLives: () => ({
    type: SUB_LIVES,
    payload: 1,
  })
}
