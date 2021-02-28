import {configureStore} from "@reduxjs/toolkit";
import answersReducer from "./answers-slice";
import mistakesReducer from "./mistakes-slice";
import questionReducer from "./question-slice";
import timeSlice from "./time-slice";
import activePlayerReducer from "./active-player-slice";
import genreAnswersReducer from "./genre-answers-slice";


const store = configureStore({
    reducer: {
        answers: answersReducer,
        mistakes: mistakesReducer,
        questions: questionReducer,
        timer: timeSlice,
        activePlayer: activePlayerReducer,
        genreAnswers: genreAnswersReducer,
    }
});

export default store;