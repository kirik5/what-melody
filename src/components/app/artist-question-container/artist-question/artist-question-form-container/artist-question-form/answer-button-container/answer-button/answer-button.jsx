import React from "react";

const AnswerButton = ({id, source, onAnswerButtonClick}) => {
    return (
        <div key={`answer-${id}`} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer"
                   value={source.artist}
                   id={`answer-${id}`}
                   onClick={onAnswerButtonClick}/>
            <label className="artist__name" htmlFor={`answer-${id}`}>
                <img className="artist__picture" src={source.picture} alt={source.artist}/>
                {source.artist}
            </label>
        </div>
    )
};

export default AnswerButton;