import React from "react";
import PropTypes from "prop-types";

const AnswerButton = ({id, source, onAnswerButtonClick}) => {
    const {picture, artist} = source;

    return (
        <div key={`answer-${id}`} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer"
                   value={artist}
                   id={`answer-${id}`}
                   onClick={onAnswerButtonClick}/>
            <label className="artist__name" htmlFor={`answer-${id}`}>
                <img className="artist__picture" src={picture} alt={artist}/>
                {artist}
            </label>
        </div>
    )
};

export default AnswerButton;

AnswerButton.propTypes = {
    id: PropTypes.number.isRequired,
    source: PropTypes.object.isRequired,
    onAnswerButtonClick: PropTypes.func.isRequired,
};