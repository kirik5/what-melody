import Error from "./error/error";
import {connect} from "react-redux";
import {clearAnswersActionCreator} from "../../../reducers/all-answers-reducer";
import {resetMistakesActionCreator} from "../../../reducers/mistakes-reducer";
import {resetTimeActionCreator} from "../../../reducers/time-reducer";
import {resetGameActionCreator} from "../../../reducers/question-reducer";

const mapDispatchToProps = dispatch => ({
  restartGame: () => {
    dispatch(clearAnswersActionCreator());
    dispatch(resetMistakesActionCreator());
    dispatch(resetTimeActionCreator());
    dispatch(resetGameActionCreator());
  }
});

export default connect(null, mapDispatchToProps)(Error);