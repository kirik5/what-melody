import React from "react";
import AnswerButton from "./answer-button/answer-button";
import {addMistakes} from "../../../../../../../reducers/mistakes-slice";
import {pushAnswer} from "../../../../../../../reducers/answers-slice";
import {allPlayersOff} from "../../../../../../../reducers/active-player-slice";
import {addActiveQuestionNumber} from "../../../../../../../reducers/question-slice";
import {useDispatch} from "react-redux";

const takeAnswerFromArtistQuestion = (userAnswer, rightArtist) => {
    return rightArtist === userAnswer;
};


const AnswerButtonContainer = ({id, source}) => {

    const answerHandler = (userAnswer) => {
        return (dispatch, getState) => {

            const numberOfActiveQuestion = getState().questions.numberOfActiveQuestion;
            const rightAnswer = getState().questions.questions[numberOfActiveQuestion].song.artist;

            const answer = takeAnswerFromArtistQuestion(userAnswer, rightAnswer);
            if (!answer) {
                dispatch(addMistakes())
            }
            dispatch(pushAnswer(answer));
            dispatch(allPlayersOff());
            dispatch(addActiveQuestionNumber());
        }
    };

    const dispatch = useDispatch();
    const onAnswerButtonClick = (evt) => dispatch(answerHandler(evt.target.value));

    return (
        <AnswerButton
            id={id}
            source={source}
            onAnswerButtonClick={onAnswerButtonClick}
        />
    )
};


export default AnswerButtonContainer;