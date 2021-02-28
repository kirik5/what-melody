import React from "react";
import PropTypes from "prop-types";
import AudioPlayerContainer from "../../audio-player/audio-player-container";
import TimerContainer from "../../timer/timer-container";
import MistakesContainer from "../../mistakes/mistakes-container";
import BackToStartContainer from "../../back-to-start-container/back-to-start-container";
import ArtistQuestionFormContainer from "./artist-question-form-container/artist-question-form-container";

const ArtistQuestion = ({activeQuestion}) => {



    return (
        <section className="game game--artist">
            <header className="game__header" style={{justifyContent: 'center'}}>

                <BackToStartContainer/>

                <TimerContainer/>

                <MistakesContainer/>

            </header>

            <section className="game__screen">
                <h2 className="game__title">Кто исполняет эту песню?</h2>
                <div className="game__track">
                    <div className="track">

                        <AudioPlayerContainer
                            src={activeQuestion.song.src}
                            id={0}
                        />

                    </div>
                </div>

                <ArtistQuestionFormContainer
                    answers={activeQuestion.answers}
                />

            </section>
        </section>
    )
}

ArtistQuestion.propTypes = {
    activeQuestion: PropTypes.object.isRequired,
};

export default ArtistQuestion;
