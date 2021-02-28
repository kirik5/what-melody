import React from "react";
import PropTypes from "prop-types";
import AnswerButtonContainer from "./answer-button-container/answer-button-container";


const ArtistQuestionForm = ({answers}) => {

    const dontSendFormData = (evt) => evt.preventDefault();

    return (
        <form className="game__artist" onSubmit={dontSendFormData}>

            {answers.map((it, i) => {
                return (
                    <AnswerButtonContainer
                        key={i}
                        id={i}
                        source={it}
                    />
                );
            })}

        </form>
    )
};

export default ArtistQuestionForm;


ArtistQuestionForm.propTypes = {
    answers: PropTypes.array.isRequired,
};