import React from "react";
import BackToStart from "./back-to-start/back-to-start";
import {useDispatch} from "react-redux";
import {clearAnswers} from "../../../reducers/answers-slice";
import {resetMistakes} from "../../../reducers/mistakes-slice";
import {resetTimer} from "../../../reducers/time-slice";
import {resetGame} from "../../../reducers/question-slice";
import {allPlayersOff} from "../../../reducers/active-player-slice";
import {genreAnswersClear} from "../../../reducers/genre-answers-slice";

const BackToStartContainer = () => {

    const dispatch = useDispatch();

    const timerOff = () => (dispatch, getState) => {
        const id = getState().timer.timerId;
        clearTimeout(id);
    };

    const restartGameHandler = () => {
        dispatch(timerOff());
        dispatch(resetTimer());
        dispatch(allPlayersOff());
        dispatch(genreAnswersClear());
        dispatch(clearAnswers());
        dispatch(resetMistakes());
        dispatch(resetGame());
    };

    return (
        <BackToStart
            goToStartGame={restartGameHandler}
        />
    )
};

export default BackToStartContainer;