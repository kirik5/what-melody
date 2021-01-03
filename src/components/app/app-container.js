import React from "react";
import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import App from "./app";


const endGame = createSelector(
    state => state.timer.currentTime,
    currentTime => !!currentTime,
);

const AppContainer = (props) => {
    const activeQuestionNumber = useSelector(state => state.questions.numberOfActiveQuestion);
    const mistakes = useSelector(state => state.mistakes.countOfMistakes);
    const maxMistakes = useSelector(state => state.mistakes.maxMistakes);
    const questions = useSelector(state => state.questions.questions);


    const wilEndGame = useSelector(endGame);

    return (
        <App
            activeQuestionNumber={activeQuestionNumber}
            mistakes={mistakes}
            maxMistakes={maxMistakes}
            questions={questions}
            wilEndGame={wilEndGame}
        />
    )
};

export default AppContainer;