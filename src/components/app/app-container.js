// import React from "react";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => {
  return {
    activeQuestionNumber: state.questionReducer.numberOfActiveQuestion,
    mistakes: state.mistakesReducer.countOfMistakes,
    maxMistakes: state.mistakesReducer.maxMistakes,
    questions: state.questionReducer.questions,
    time: state.timeReducer.currentTime,
  }
};



export default connect(mapStateToProps, null)(App);