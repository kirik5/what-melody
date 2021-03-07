import React from "react";
import Result from "./result/result";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {clearAnswers} from "../../../reducers/answers-slice";
import {resetMistakes} from "../../../reducers/mistakes-slice";
import {resetTimer} from "../../../reducers/time-slice";
import {resetGame} from "../../../reducers/question-slice";

const ResultContainer = () => {

    const lengthOfRightAnswersArr = createSelector(
        state => state.answers.filter(it => it),
        answers => answers.length,
    );
    const countOfRightAnswers = useSelector(lengthOfRightAnswersArr);

    const countOfMistakes = useSelector(state => state.mistakes.countOfMistakes);

    const dispatch = useDispatch();

    const timerOff = () => (dispatch, getState) => {
        const id = getState().timer.timerId;
        clearTimeout(id);
    };

    const restartGameHandler = () => {
        dispatch(clearAnswers());
        dispatch(resetMistakes());
        dispatch(resetTimer());
        dispatch(resetGame());
    };

    return (
        <Result
            onRestartGame={restartGameHandler}
            countOfRightAnswers={countOfRightAnswers}
            countOfMistakes={countOfMistakes}
            timerOff={timerOff}
        />
    )
};

export default ResultContainer;

