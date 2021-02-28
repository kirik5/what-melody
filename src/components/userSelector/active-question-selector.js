import {createSelector} from "@reduxjs/toolkit";

export const activeQuestionSelector = createSelector(
    state => state.questions.questions,
    state => state.questions.numberOfActiveQuestion,
    (questions, number) => questions[number]
);