import React from "react";
import PropTypes from "prop-types";


const BackToStart = ({goToStartGame}) => {

    const startGameAgainHandler = (evt) => {
        evt.preventDefault();
        goToStartGame();
    };

    return (
        <a className="game__back" href="/" onClick={startGameAgainHandler}>
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>
    )
};

export default BackToStart;


BackToStart.propTypes = {
    goToStartGame: PropTypes.func.isRequired,
};