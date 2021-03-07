import React from "react";
import Mistakes from "./mistakes/mistakes";
import {useSelector} from "react-redux";
import {getMistakes} from "../../../reducers/mistakes-slice";

const MistakesContainer = () => {
    const countOfMistakes = useSelector(getMistakes);

    return (
        <Mistakes
            countOfMistakes={countOfMistakes}
        />
    )
};

export default MistakesContainer;