import ArtistQuestion from "./artist-question/artist-question";
import {connect} from "react-redux";
import {
  // endedPlayingActionCreator,
  loadedTrackActionCreator,
  activePlayerActionCreator,
  resetPlayingActionCreator,
  updateTimeToPlayActionCreator
} from "../../../reducers/audio-player-reducer";
import {nextQuestionActionCreator} from "../../../reducers/question-reducer";
import {pushAnswerActionCreator} from "../../../reducers/all-answers-reducer";
import {addMistakesActionCreator} from "../../../reducers/mistakes-reducer";

const mapStateToProps = (state) => {
  return {
    time: state.timeReducer.currentTime,
    maxTime: state.timeReducer.maxTime,
    activeQuestion: state.questionReducer.questions[state.questionReducer.numberOfActiveQuestion],
    mistakes: state.mistakesReducer.countOfMistakes,
    player: state.audioPlayerReducer.player,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playing: () => {
      dispatch(activePlayerActionCreator());
    },
    loading: () => {
      dispatch(loadedTrackActionCreator());
    },
    timeUpdating: (time) => {
      dispatch(updateTimeToPlayActionCreator(time));
    },
    // endedPlaying: (i) => {
    //   dispatch(endedPlayingActionCreator(i))
    // },
    nextQuestion: (activeQuestion, artist) => {
      let answer = takeAnswerFromArtistQuestion(activeQuestion, artist);
      if (!answer) {dispatch(addMistakesActionCreator())};
      dispatch(pushAnswerActionCreator(answer));
      dispatch(resetPlayingActionCreator());
      dispatch(nextQuestionActionCreator());
    },
  }
};

const takeAnswerFromArtistQuestion = (activeQuestion, artist) => {

  return activeQuestion.song.artist === artist;
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistQuestion);