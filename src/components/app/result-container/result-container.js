import React from "react";
import Result from "./result/result";
import {useDispatch, useSelector} from "react-redux";
import {lengthOfRightAnswersArr} from "../../../reducers/answers-slice";
import {getMistakes} from "../../../reducers/mistakes-slice";
import {restartGameHandler, timerOff} from "../../../reducers/game-action-thunk";

const ResultContainer = () => {
    const countOfRightAnswers = useSelector(lengthOfRightAnswersArr);
    const countOfMistakes = useSelector(getMistakes);
    const dispatch = useDispatch();
    const restartGame = () => dispatch(restartGameHandler());

    return (
        <Result
            onRestartGame={restartGame}
            countOfRightAnswers={countOfRightAnswers}
            countOfMistakes={countOfMistakes}
            timerOff={timerOff}
        />
    )
};

export default ResultContainer;

