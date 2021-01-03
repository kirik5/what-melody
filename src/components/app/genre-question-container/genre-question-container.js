import GenreQuestion from "./genre-question/genre-question";
import {createSelector} from "@reduxjs/toolkit";
import {useSelector, useDispatch} from "react-redux";
import {addActiveQuestionNumber} from "../../../reducers/question-slice";
import {pushAnswer} from "../../../reducers/answers-slice";
import {addMistakes} from "../../../reducers/mistakes-slice";
import React, {useState} from "react";


const takeAnswerFromGenreQuestion = (activeQuestion, answers) => {
    const rightAnswers = activeQuestion.answers.map(it => {
        return it.genre === activeQuestion.genre;
    });

    return rightAnswers.every((it, i) => it === answers[i]);
};

const activeQuestionSelector = createSelector(
    state => state.questions.questions,
    state => state.questions.numberOfActiveQuestion,
    (questions, number) => questions[number]
);

const GenreQuestionContainer = (props) => {
    const activeQuestion = useSelector(activeQuestionSelector);
    const [numberOfActivePlayer, setActivePlayer] = useState(-1);
    const [checkedAnswers, setAnswers] = useState([false, false, false, false]);

    const dispatch = useDispatch();

    const answerHandler = (activeQuestion, answers) => {
        return (dispatch) => {
            const answer = takeAnswerFromGenreQuestion(activeQuestion, answers);
            if (!answer) {
                dispatch(addMistakes())
            }
            dispatch(pushAnswer(answer));
            dispatch(addActiveQuestionNumber());
        }
    };

    const onAnswerButtonClick = (activeQuestion, answers) => {
        dispatch(answerHandler(activeQuestion, answers));
    };


    return (
        <GenreQuestion
            activeQuestion={activeQuestion}
            numberOfActivePlayer={numberOfActivePlayer}
            onPlayButtonClick={setActivePlayer}
            checkedAnswers={checkedAnswers}
            setAnswers={setAnswers}
            onAnswerButtonClick={onAnswerButtonClick}
        />
    )
};

export default GenreQuestionContainer;