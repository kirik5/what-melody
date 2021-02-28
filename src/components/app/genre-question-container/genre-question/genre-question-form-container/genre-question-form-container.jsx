import React from "react";
import PropTypes from "prop-types";
import GenreQuestionForm from "./genre-question-form/genre-question-form";
import {useDispatch} from "react-redux";
import {genreAnswersClear} from "../../../../../reducers/genre-answers-slice";
import {addMistakes} from "../../../../../reducers/mistakes-slice";
import {pushAnswer} from "../../../../../reducers/answers-slice";
import {addActiveQuestionNumber} from "../../../../../reducers/question-slice";
import {allPlayersOff} from "../../../../../reducers/active-player-slice";

const takeAnswerFromGenreQuestion = (answers, rightAnswer, userAnswers) => {

    const rightAnswers = answers.map(it => {
        return it.genre === rightAnswer;
    });
    return rightAnswers.every((it, i) => it === userAnswers[i]);
};


const GenreQuestionFormContainer = ({answers}) => {

    const answerHandler = (answers) => {
        return (dispatch, getState) => {
            const userAnswers = getState().genreAnswers.genreAnswers;
            const numberOfActiveQuestion = getState().questions.numberOfActiveQuestion;
            const rightAnswer = getState().questions.questions[numberOfActiveQuestion].genre;

            const answer = takeAnswerFromGenreQuestion(answers, rightAnswer, userAnswers);
            if (!answer) {
                dispatch(addMistakes())
            }
            dispatch(pushAnswer(answer));
            dispatch(genreAnswersClear());
            dispatch(allPlayersOff());
            dispatch(addActiveQuestionNumber());
        }
    };

    const dispatch = useDispatch();
    const onAnswerButtonClick = (answers) => (evt) => {
        evt.preventDefault();
        dispatch(answerHandler(answers));
    }

    return (
        <GenreQuestionForm
            answers={answers}
            onAnswerButtonClick={onAnswerButtonClick(answers)}
        />
    )
};

export default GenreQuestionFormContainer;


GenreQuestionFormContainer.propTypes = {
    answers: PropTypes.array.isRequired,
};