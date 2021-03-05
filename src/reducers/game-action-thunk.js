import {addActiveQuestionNumber, allQuestions, getNumberOfActiveQuestion} from "./question-slice";
import {startTimer} from "./time-slice";
import {addMistakes} from "./mistakes-slice";
import {genreAnswers, genreUserAnswers, pushAnswer} from "./answers-slice";
import {genreAnswersClear} from "./genre-answers-slice";
import {allPlayersOff} from "./active-player-slice";

export const startGameHandler = () => (dispatch) => {
    dispatch(addActiveQuestionNumber());
    dispatch(startTimer());
};

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
        };
        dispatch(pushAnswer(answer));
        dispatch(genreAnswersClear());
        dispatch(allPlayersOff());
        dispatch(addActiveQuestionNumber());
    }
};