import Hello from "./hello/hello";
import {connect} from "react-redux";
import {nextQuestionActionCreator} from "../../../reducers/question-reducer";
import {setTimerIdActionCreator, subTimeActionCreator} from "../../../reducers/time-reducer";
import {store} from "../../../index";

const mapStateToProps = (state) => {
  return {
    time: state.timeReducer.currentTime,
    maxMistakes: state.mistakesReducer.maxMistakes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGameHandler: () => {
      dispatch(nextQuestionActionCreator());

      const timerTick = (time) => {

        if (time > 0) {
          dispatch(subTimeActionCreator());
          let timerId = setTimeout(() => timerTick(store.getState().timeReducer.currentTime), 1000);
          dispatch(setTimerIdActionCreator(timerId));
        }
      };

      let timerId = setTimeout(() => timerTick(store.getState().timeReducer.currentTime), 1000);
      dispatch(setTimerIdActionCreator(timerId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);