import React from "react";
import PropTypes from "prop-types";
import TimerContainer from "../../timer/timer-container";
import MistakesContainer from "../../mistakes/mistakes-container";
import BackToStartContainer from "../../back-to-start-container/back-to-start-container";
import GenreQuestionFormContainer from "./genre-question-form-container/genre-question-form-container";

const GenreQuestion = ({activeQuestion}) => {

    return (
        <section className="game game--genre">
            <header className="game__header" style={{justifyContent: 'center'}}>

                <BackToStartContainer/>

                <TimerContainer/>

                <MistakesContainer/>

            </header>
            <section className="game__screen">
                <h2 className="game__title">Выберите {activeQuestion.genre}-треки</h2>

                <GenreQuestionFormContainer
                    answers={activeQuestion.answers}
                />

            </section>
        </section>
    )
};

export default GenreQuestion;


GenreQuestion.propTypes = {
    activeQuestion: PropTypes.object.isRequired,
};
