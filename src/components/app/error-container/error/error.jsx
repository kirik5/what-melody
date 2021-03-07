import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

const Error = ({onRestartGame, timerOff}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(timerOff())
    }, []);

    return (
        <section className="result">
            <div className="result__logo">
                <img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
            </div>
            <h2 className="result__title">Какая жалость!</h2>
            <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий
                раз!</p>
            <button className="replay" type="button" onClick={onRestartGame}>Попробовать ещё раз</button>
        </section>
    )
};

Error.propTypes = {
    onRestartGame: PropTypes.func.isRequired,
    timerOff: PropTypes.func.isRequired,
}

export default Error;