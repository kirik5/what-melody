import React from "react";
import Error from "./error/error";
import {useDispatch} from "react-redux";
import {clearAnswers} from "../../../reducers/answers-slice";
import {resetMistakes} from "../../../reducers/mistakes-slice";
import {resetTimer} from "../../../reducers/time-slice";
import {resetGame} from "../../../reducers/question-slice";
import useTimerId from "../userHooks/useTimerId";


const ErrorContainer = () => {
    const dispatch = useDispatch();

    const id = useTimerId();

    const timerOff = () => {
        clearTimeout(id);
    };

    const restartGameHandler = () => {
        dispatch(clearAnswers());
        dispatch(resetMistakes());
        dispatch(resetTimer());
        dispatch(resetGame());
    };


    return (
        <Error
            onRestartGame={restartGameHandler}
            timerOff={timerOff}
        />
    )
};

export default ErrorContainer;