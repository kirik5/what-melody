import React from "react";
import PropTypes from "prop-types";

const AnswerChecked = ({id, isChecked, changeChecked}) => {
    return (
        <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer"
                   value={`answer-${id}`} id={`answer-${id}`}
                   onChange={changeChecked}
                   checked={isChecked}
            />
            <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
    )
};

export default AnswerChecked;


AnswerChecked.propTypes = {
    id: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    changeChecked: PropTypes.func.isRequired,
};