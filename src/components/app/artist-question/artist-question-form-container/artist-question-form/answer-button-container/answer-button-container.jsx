import React from "react";
import PropTypes from "prop-types";
import AnswerButton from "./answer-button/answer-button";
import {useDispatch} from "react-redux";
import {artistAnswerHandler} from "../../../../../../reducers/game-action-thunk";


const AnswerButtonContainer = ({id, source}) => {
    const dispatch = useDispatch();
    const onAnswerButtonClick = (evt) => dispatch(artistAnswerHandler(evt.target.value));

    return (
        <AnswerButton
            id={id}
            source={source}
            onAnswerButtonClick={onAnswerButtonClick}
        />
    )
};

export default AnswerButtonContainer;

AnswerButtonContainer.propTypes = {
    id: PropTypes.number.isRequired,
    source: PropTypes.object.isRequired,
}