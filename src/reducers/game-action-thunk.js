import {
    addActiveQuestionNumber,
    allQuestions,
    fetchQuestions,
    getNumberOfActiveQuestion,
    resetGame
} from "./question-slice";
import {getCurrentTime, resetTimer, startTimer} from "./time-slice";
import {addMistakes, getMaxMistakes, getMistakes, resetMistakes} from "./mistakes-slice";
import {clearAnswers, pushAnswer} from "./answers-slice";
import {genreAnswersClear, genreUserAnswers} from "./genre-answers-slice";
import {allPlayersOff} from "./active-player-slice";
import {createSelector} from "@reduxjs/toolkit";

export const startGameHandler = () => (dispatch) => {
    dispatch(addActiveQuestionNumber());
    dispatch(startTimer());
};

export const isNotGameOver = createSelector(
    getMistakes,
    getMaxMistakes,
    getCurrentTime,
    (countOfMistakes, maxMistakes, currentTime) => (countOfMistakes < maxMistakes) && (currentTime > 0),
);

const takeAnswerFromGenreQuestion = (answers, rightAnswer, userAnswers) => {
    const rightAnswers = answers.map(it => {
        return it.genre === rightAnswer;
    });
    return rightAnswers.every((it, i) => it === userAnswers[i]);
};

export const genreAnswerHandler = () => {
    return (dispatch, getState) => {
        const userAnswers = genreUserAnswers(getState());
        const numberOfActiveQuestion = getNumberOfActiveQuestion(getState());
        const questions = allQuestions(getState());
        const rightAnswer = questions[numberOfActiveQuestion].genre;
        const answers = questions[numberOfActiveQuestion].answers;
        const answer = takeAnswerFromGenreQuestion(answers, rightAnswer, userAnswers);
        if (!answer) {
            dispatch(addMistakes())
        }
        dispatch(pushAnswer(answer));
        dispatch(genreAnswersClear());
        dispatch(allPlayersOff());
        dispatch(addActiveQuestionNumber());
    }
};

const takeAnswerFromArtistQuestion = (userAnswer, rightArtist) => {
    return rightArtist === userAnswer;
};

export const artistAnswerHandler = (userAnswer) => {
    return (dispatch, getState) => {
        const numberOfActiveQuestion = getNumberOfActiveQuestion(getState());
        const rightAnswer = getState().questions.questions[numberOfActiveQuestion].song.artist;
        const answer = takeAnswerFromArtistQuestion(userAnswer, rightAnswer);
        if (!answer) {
            dispatch(addMistakes())
        }
        dispatch(pushAnswer(answer));
        dispatch(allPlayersOff());
        dispatch(addActiveQuestionNumber());
    }
};

const genreAnswers = state => state.genreAnswers;

export const checkedId = (id) => createSelector(
    genreAnswers,
    checkedArray => checkedArray[id],
);

export const timerOff = () => (dispatch, getState) => {
    const id = getState().timer.timerId;
    clearTimeout(id);
};

export const restartGameHandler = () => (dispatch) => {
    dispatch(timerOff());
    dispatch(resetTimer());
    dispatch(allPlayersOff());
    dispatch(genreAnswersClear());
    dispatch(clearAnswers());
    dispatch(resetMistakes());
    dispatch(resetGame());
    dispatch(fetchQuestions());
};