import React from "react";
import Hello from "./hello/hello";
import {useSelector, useDispatch} from "react-redux";
import {getCurrentTime} from "../../../reducers/time-slice";
import {getMaxMistakes} from "../../../reducers/mistakes-slice";
import {startGameHandler} from "../../../reducers/game-action-thunk";


const HelloContainer = () => {
    const time = useSelector(getCurrentTime);
    const maxMistakes = useSelector(getMaxMistakes);
    const dispatch = useDispatch();

    const startGame = () => {
        dispatch(startGameHandler());
    };

    return (
        <Hello
            time={time}
            maxMistakes={maxMistakes}
            startGameHandler={startGame}
        />
    )
};

export default HelloContainer;