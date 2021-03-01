import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import App from "./app";
import {fetchQuestions} from "../../reducers/question-slice";

const getQuestionsStatus = state => state.questions.status;

const getNumberOfActiveQuestion = state => state.questions.numberOfActiveQuestion;

const isNotGameOver = createSelector(
    state => state.mistakes.countOfMistakes,
    state => state.mistakes.maxMistakes,
    state => state.timer.currentTime,
    (countOfMistakes, maxMistakes, currentTime) => (countOfMistakes < maxMistakes) && (currentTime > 0),
);

const isNotEndOfQuestions = createSelector(
    getNumberOfActiveQuestion,
    state => state.questions.questions.length,
    (numberOfActiveQuestion, lengthOfQuestions) => lengthOfQuestions > numberOfActiveQuestion,
);

const getTypeOfQuestion = createSelector(
    getNumberOfActiveQuestion,
    state => state.questions.questions,
    (numberOfActiveQuestion, questions) => {
        const activeQuestion = questions[numberOfActiveQuestion];
        if (activeQuestion) {
            return activeQuestion.type;
        }
    }
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