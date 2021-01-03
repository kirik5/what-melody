import React from "react";
import PropTypes from "prop-types";
import AudioPlayerContainer from "../../audio-player/audio-player-container";
import TimerContainer from "../../timer/timer-container";
import MistakesContainer from "../../mistakes/mistakes-container";
import BackToStartContainer from "../../back-to-start-container/back-to-start-container";

const ArtistQuestion = ({activeQuestion, numberOfActivePlayer, onPlayButtonClick, onAnswerButtonClick}) => {

    const playButtonClickHandler = (i) => {
        if (numberOfActivePlayer === i) {
            onPlayButtonClick(-1)
        } else {
            onPlayButtonClick(i)
        }
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
    };

    const answerButtonClickHandler = (artist) => {
        onAnswerButtonClick(activeQuestion, artist);
    };


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
                            isPlaying={numberOfActivePlayer === 0}
                            onPlayButtonClick={() => playButtonClickHandler(0)}
                        />

                    </div>
                </div>

                <form className="game__artist" onSubmit={submitHandler}>

                    {activeQuestion.answers.map((it, i) => {
                        return (
                            <div key={`answer-${i}`} className="artist">
                                <input className="artist__input visually-hidden" type="radio" name="answer"
                                       value={it.artist}
                                       id={`answer-${i}`}
                                       onClick={(evt) => answerButtonClickHandler(evt.target.value)}/>
                                <label className="artist__name" htmlFor={`answer-${i}`}>
                                    <img className="artist__picture" src={it.picture} alt={it.artist}/>
                                    {it.artist}
                                </label>
                            </div>
                        );
                    })}

                </form>
            </section>
        </section>
    )
}

ArtistQuestion.propTypes = {
    activeQuestion: PropTypes.object.isRequired,
    numberOfActivePlayer: PropTypes.number.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    onAnswerButtonClick: PropTypes.func.isRequired,
};

export default ArtistQuestion;
