import React from "react";
import Hello from "./hello/hello";
import {useSelector, useDispatch} from "react-redux";
import {addActiveQuestionNumber} from "../../../reducers/question-slice";
import {startTimer} from "../../../reducers/time-slice";


const HelloContainer = () => {
    const time = useSelector(state => state.timer.currentTime);
    const maxMistakes = useSelector(state => state.mistakes.maxMistakes);
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(addActiveQuestionNumber());
        dispatch(startTimer);
    };

    return (
        <Hello
            time={time}
            maxMistakes={maxMistakes}
            startGameHandler={startGameHandler}
        />
    )
};

export default HelloContainer;