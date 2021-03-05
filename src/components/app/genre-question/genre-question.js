import React from "react";
import PropTypes from "prop-types";
import TimerContainer from "../timer/timer-container";
import MistakesContainer from "../mistakes/mistakes-container";
import BackToStartContainer from "../back-to-start-container/back-to-start-container";
import GenreQuestionFormContainer from "./genre-question-form-container/genre-question-form-container";

const GenreQuestion = (props) => {

    return (
        <section className="game game--genre">
            <header className="game__header" style={{justifyContent: 'center'}}>

                <BackToStartContainer/>

                <TimerContainer/>

                <MistakesContainer/>

            </header>
            <section className="game__screen">

                <GenreQuestionFormContainer/>

            </section>
        </section>
    )
};

export default GenreQuestion;
