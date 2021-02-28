import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";


const Result = ({onRestartGame, timerOff, countOfRightAnswers, countOfMistakes}) => {
    const dispatch = useDispatch();

    dispatch(timerOff());

    return (
        <section className="result">
            <div className="result__logo">
                <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
            </div>
            <h2 className="result__title">Вы настоящий меломан!</h2>
            <p className="result__total">Вы ответили правильно на {countOfRightAnswers} вопросов и совершили {countOfMistakes} ошибки</p>
            <button className="replay" type="button" onClick={onRestartGame}>Сыграть ещё раз</button>
        </section>
    )
};

Result.propTypes = {
    onRestartGame: PropTypes.func.isRequired,
    timerOff: PropTypes.func.isRequired,
    countOfRightAnswers: PropTypes.number.isRequired,
    countOfMistakes: PropTypes.number.isRequired,
};

export default Result;