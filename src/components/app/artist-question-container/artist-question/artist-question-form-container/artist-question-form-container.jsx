import React from "react";
import PropTypes from "prop-types";
import ArtistQuestionForm from "./artist-question-form/artist-question-form";


const ArtistQuestionFormContainer = ({answers}) => {

    return(
        <ArtistQuestionForm
            answers={answers}
        />
    )
};

export default ArtistQuestionFormContainer;


ArtistQuestionFormContainer.propTypes = {
  answers: PropTypes.array.isRequired,
};