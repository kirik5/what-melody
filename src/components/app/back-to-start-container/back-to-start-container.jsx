import React from "react";
import BackToStart from "./back-to-start/back-to-start";
import {restartGameHandler} from "../../../reducers/game-action-thunk";
import {useDispatch} from "react-redux";

const BackToStartContainer = () => {
    const dispatch = useDispatch();

    const restartGame = () => dispatch(restartGameHandler());

    return (
        <BackToStart
            goToStartGame={restartGame}
        />
    )
};

export default BackToStartContainer;