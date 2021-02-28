import GenreQuestion from "./genre-question/genre-question";
import {useSelector} from "react-redux";
import React from "react";
import {activeQuestionSelector} from "../../userSelector/active-question-selector";


const GenreQuestionContainer = () => {

    const activeQuestion = useSelector(activeQuestionSelector);

    return (
        <GenreQuestion
            activeQuestion={activeQuestion}
        />
    )
};

export default GenreQuestionContainer;