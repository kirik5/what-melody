import React from "react";
import Error from "./error/error";
import {useDispatch} from "react-redux";
import {restartGameHandler, timerOff} from "../../../reducers/game-action-thunk";


const ErrorContainer = () => {
    const dispatch = useDispatch();
    const restartGame = () => dispatch(restartGameHandler());

    return (
        <Error
            onRestartGame={restartGame}
            timerOff={timerOff}
        />
    )
};

export default ErrorContainer;