import React from "react";
import PropTypes from "prop-types";
import AnswerChecked from "./answer-checked";
import {createSelector} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {changeGenreAnswers} from "../../../../../../../reducers/genre-answers-slice";

const AnswerCheckedContainer = ({id}) => {

    const checked = createSelector(
        state => state.genreAnswers.genreAnswers,
        checkedArray => checkedArray[id],
    );

    const isChecked = useSelector(checked);

    const dispatch = useDispatch();

    const changeChecked = () => dispatch(changeGenreAnswers(id));

    return (
        <AnswerChecked
            id={id}
            isChecked={isChecked}
            changeChecked={changeChecked}
        />
    )
};

export default AnswerCheckedContainer;


AnswerCheckedContainer.propTypes = {
    id: PropTypes.number.isRequired,
}