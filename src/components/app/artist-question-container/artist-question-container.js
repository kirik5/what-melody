import React from "react";
import ArtistQuestion from "./artist-question/artist-question";
import {useSelector} from "react-redux";
import {activeQuestionSelector} from "../../userSelector/active-question-selector";


const ArtistQuestionContainer = () => {
    const activeQuestion = useSelector(activeQuestionSelector);


    return (
        <ArtistQuestion
            activeQuestion={activeQuestion}
        />
    )
};

export default ArtistQuestionContainer;