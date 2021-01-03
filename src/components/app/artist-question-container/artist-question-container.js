import React, {useState} from "react";
import ArtistQuestion from "./artist-question/artist-question";
import {useSelector, useDispatch} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {addActiveQuestionNumber} from "../../../reducers/question-slice";
import {pushAnswer} from "../../../reducers/answers-slice";
import {addMistakes} from "../../../reducers/mistakes-slice";


const takeAnswerFromArtistQuestion = (activeQuestion, artist) => {
    return activeQuestion.song.artist === artist;
};

const activeQuestionSelector = createSelector(
    state => state.questions.questions,
    state => state.questions.numberOfActiveQuestion,
    (questions, number) => questions[number]
);

const ArtistQuestionContainer = (props) => {
    const activeQuestion = useSelector(activeQuestionSelector);
    const [numberOfActivePlayer, setActivePlayer] = useState(-1);

    const dispatch = useDispatch();

    const answerHandler = (activeQuestion, artist) => {
        return (dispatch) => {
            const answer = takeAnswerFromArtistQuestion(activeQuestion, artist);
            if (!answer) {dispatch(addMistakes())}
            dispatch(pushAnswer(answer));
            dispatch(addActiveQuestionNumber());
        }
    };

    const onAnswerButtonClick = (activeQuestion, answers) => {
        dispatch(answerHandler(activeQuestion, answers));
    };


    return (
        <ArtistQuestion
            activeQuestion={activeQuestion}
            numberOfActivePlayer={numberOfActivePlayer}
            onPlayButtonClick={setActivePlayer}
            onAnswerButtonClick={onAnswerButtonClick}
        />
    )
};

export default ArtistQuestionContainer;