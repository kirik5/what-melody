import React from "react";
import TimerContainer from "../timer/timer-container";
import MistakesContainer from "../mistakes/mistakes-container";
import BackToStartContainer from "../back-to-start-container/back-to-start-container";
import ArtistQuestionFormContainer from "./artist-question-form-container/artist-question-form-container";

const ArtistQuestion = () => {

    return (
        <section className="game game--artist">
            <header className="game__header" style={{justifyContent: 'center'}}>

                <BackToStartContainer/>

                <TimerContainer/>

                <MistakesContainer/>

            </header>

            <section className="game__screen">
                <h2 className="game__title">Кто исполняет эту песню?</h2>

                <ArtistQuestionFormContainer/>

            </section>
        </section>
    )
}

export default ArtistQuestion;
