import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import App from "./app";
import {
    fetchQuestions,
    getNumberOfActiveQuestion,
    getQuestionsStatus, getTypeOfQuestion,
    isNotEndOfQuestions
} from "../../reducers/question-slice";
import {getMaxMistakes, getMistakes} from "../../reducers/mistakes-slice";
import {getCurrentTime} from "../../reducers/time-slice";


const isNotGameOver = createSelector(
    getMistakes,
    getMaxMistakes,
    getCurrentTime,
    (countOfMistakes, maxMistakes, currentTime) => (countOfMistakes < maxMistakes) && (currentTime > 0),
);

const AppContainer = (props) => {
    const numberOfActiveQuestion = useSelector(getNumberOfActiveQuestion);
    const notEndOfQuestions = useSelector(isNotEndOfQuestions);
    const notGameOver = useSelector(isNotGameOver);
    const statusOfFetchingQuestions = useSelector(getQuestionsStatus);
    const typeOfQuestion = useSelector(getTypeOfQuestion);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchQuestions());
    // }, []);

    return (
        <App
            numberOfActiveQuestion={numberOfActiveQuestion}
            isNotEndOfQuestions={notEndOfQuestions}
            isNotGameOver={notGameOver}
            statusOfFetchingQuestions={statusOfFetchingQuestions}
            typeOfQuestion={typeOfQuestion}
        />
    )
};

export default AppContainer;