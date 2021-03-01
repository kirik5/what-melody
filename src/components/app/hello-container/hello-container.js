import React from "react";
import Hello from "./hello/hello";
import {useSelector, useDispatch} from "react-redux";
import {addActiveQuestionNumber} from "../../../reducers/question-slice";
import {getCurrentTime, startTimer} from "../../../reducers/time-slice";
import {getMaxMistakes} from "../../../reducers/mistakes-slice";


const HelloContainer = () => {
    const time = useSelector(getCurrentTime);
    const maxMistakes = useSelector(getMaxMistakes);
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(addActiveQuestionNumber());
        dispatch(startTimer());
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