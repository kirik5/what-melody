import React from "react";
import GenreQuestionForm from "./genre-question-form/genre-question-form";
import {useDispatch, useSelector} from "react-redux";
import {getAnswers, getGenre} from "../../../../reducers/question-slice";
import {genreAnswerHandler} from "../../../../reducers/game-action-thunk";


const GenreQuestionFormContainer = () => {

    const answers = useSelector(getAnswers);
    const genre = useSelector(getGenre);
    const dispatch = useDispatch();

    const onAnswerButtonClick = (evt) => {
        evt.preventDefault();
        dispatch(genreAnswerHandler());
    }

    return (
        <GenreQuestionForm
            genre={genre}
            answers={answers}
            onAnswerButtonClick={onAnswerButtonClick}
        />
    )
};

export default GenreQuestionFormContainer;