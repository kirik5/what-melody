import {combineReducers} from "redux";
import {questionReducer} from "./question-reducer";
import {mistakesReducer} from "./mistakes-reducer";
import {timeReducer} from "./time-reducer";
import {audioPlayersReducer} from "./audio-players-reducer";
import {genreAnswerReducer} from "./genre-answer-reducer";
import {audioPlayerReducer} from "./audio-player-reducer";
import {allAnswersReducer} from "./all-answers-reducer";

const rootReducer = combineReducers({
  questionReducer,
  mistakesReducer,
  timeReducer,
  audioPlayersReducer,
  genreAnswerReducer,
  audioPlayerReducer,
  allAnswersReducer,
});

export default rootReducer;
