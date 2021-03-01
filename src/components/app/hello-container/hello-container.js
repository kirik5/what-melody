import React from "react";
import Hello from "./hello/hello";
import {useSelector, useDispatch} from "react-redux";
import {addActiveQuestionNumber} from "../../../reducers/question-slice";
import {startTimer} from "../../../reducers/time-slice";
import instance from "../../../api";


const HelloContainer = () => {
    const time = useSelector(state => state.timer.currentTime);
    const maxMistakes = useSelector(state => state.mistakes.maxMistakes);
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(addActiveQuestionNumber());
        dispatch(startTimer);
    };

    // const getQuestionsFromServer = () => {
    //     instance.get("/questions")
    //         .then(request => console.log(request.data));
    // };

    return (
        <Hello
            time={time}
            maxMistakes={maxMistakes}
            startGameHandler={startGameHandler}
        />
    )
};

export default HelloContainer;