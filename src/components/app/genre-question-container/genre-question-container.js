import GenreQuestion from "./genre-question/genre-question";
import {connect} from "react-redux";
import {
  // endedPlayingActionCreator,
  loadedTrackAllActionCreator,
  newActivePlayerActionCreator,
  resetPlayingAllActionCreator,
  updateTimeToPlayAllActionCreator
} from "../../../reducers/audio-players-reducer";
import {nextQuestionActionCreator} from "../../../reducers/question-reducer";
import {addAnswerActionCreator, clearAnswerActionCreator} from "../../../reducers/genre-answer-reducer";
import {pushAnswerActionCreator} from "../../../reducers/all-answers-reducer";
import {addMistakesActionCreator} from "../../../reducers/mistakes-reducer";

const mapStateToProps = (state) => {
  return {
    time: state.timeReducer.currentTime,
    maxTime: state.timeReducer.maxTime,
    activeQuestion: state.questionReducer.questions[state.questionReducer.numberOfActiveQuestion],
    mistakes: state.mistakesReducer.countOfMistakes,
    players: state.audioPlayersReducer.players,
    answers: state.genreAnswerReducer.answers,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playing: (i) => {
      dispatch(newActivePlayerActionCreator(i));
    },
    loading: (i) => {
      dispatch(loadedTrackAllActionCreator(i));
    },
    timeUpdating: (i, time) => {
      dispatch(updateTimeToPlayAllActionCreator(i, time));
    },
    // endedPlaying: (i) => {
    //   dispatch(endedPlayingActionCreator(i))
    // },
    nextQuestion: (activeQuestion, answers) => {

      let answer = takeAnswerFromGenreQuestion(activeQuestion, answers);
      if (!answer) {dispatch(addMistakesActionCreator())};
      dispatch(pushAnswerActionCreator(answer));
      dispatch(resetPlayingAllActionCreator());
      dispatch(clearAnswerActionCreator());
      dispatch(nextQuestionActionCreator());
    },
    addAnswer: (i) => {
      dispatch(addAnswerActionCreator(i));
    }
  }
};

const takeAnswerFromGenreQuestion = (activeQuestion, answers) => {
  const rightAnswers = activeQuestion.answers.map(it => {
    return it.genre === activeQuestion.genre;
  });

  return rightAnswers.every((it, i) => it === answers[i]);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuestion);