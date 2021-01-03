import React from "react";
import Mistakes from "./mistakes";
import {useSelector} from "react-redux";

const MistakesContainer = (props) => {
    const countOfMistakes = useSelector(state => state.mistakes.countOfMistakes);

    return (
        <Mistakes
            countOfMistakes={countOfMistakes}
        />
    )
};

export default MistakesContainer;