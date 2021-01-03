import React from "react";
import BackToStart from "./back-to-start/back-to-start";
import {useDispatch} from "react-redux";
import useTimerId from "../userHooks/useTimerId";
import {clearAnswers} from "../../../reducers/answers-slice";
import {resetMistakes} from "../../../reducers/mistakes-slice";
import {resetTimer} from "../../../reducers/time-slice";
import {resetGame} from "../../../reducers/question-slice";

const BackToStartContainer = (props) => {

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

    const goToStartGame = () => {
        timerOff();
        restartGameHandler();
    };

    return (
        <BackToStart
            goToStartGame={goToStartGame}
        />
    )
};

export default BackToStartContainer;