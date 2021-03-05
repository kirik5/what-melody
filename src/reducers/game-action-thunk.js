import {addActiveQuestionNumber} from "./question-slice";
import {startTimer} from "./time-slice";

export const startGameHandler = () => (dispatch) => {
    dispatch(addActiveQuestionNumber());
    dispatch(startTimer());
};