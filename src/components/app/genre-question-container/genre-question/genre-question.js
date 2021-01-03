import React from "react";
import PropTypes from "prop-types";
import TimerContainer from "../../timer/timer-container";
import MistakesContainer from "../../mistakes/mistakes-container";
import AudioPlayerContainer from "../../audio-player/audio-player-container";
import BackToStartContainer from "../../back-to-start-container/back-to-start-container";

const GenreQuestion = ({activeQuestion, numberOfActivePlayer, onPlayButtonClick, checkedAnswers, setAnswers, onAnswerButtonClick}) => {

    const goToNextQuestion = (evt) => {
        evt.preventDefault();
        onAnswerButtonClick(activeQuestion, checkedAnswers);
    };

    const playButtonClickHandler = (i) => {
        if (numberOfActivePlayer === i) {
            onPlayButtonClick(-1)
        } else {
            onPlayButtonClick(i)
        }
    };

    const setCheckedAnswers = (i) => {
        const newCheckedAnswers = [...checkedAnswers];
        newCheckedAnswers[i] = !checkedAnswers[i];
        setAnswers(newCheckedAnswers);
    };


    return (
        <section className="game game--genre">
            <header className="game__header" style={{justifyContent: 'center'}}>

                <BackToStartContainer/>

                <TimerContainer/>

                <MistakesContainer/>

            </header>
            <section className="game__screen">
                <h2 className="game__title">Выберите {activeQuestion.genre}-треки</h2>
                <form className="game__tracks" onSubmit={goToNextQuestion}>
                    {activeQuestion.answers.map((it, i) => {
                        return (
                            <div key={`answer-${i}`} className="track">

                                <AudioPlayerContainer
                                    src={it.src}
                                    isPlaying={numberOfActivePlayer === i}
                                    onPlayButtonClick={() => playButtonClickHandler(i)}
                                />

                                <div className="game__answer">
                                    <input className="game__input visually-hidden" type="checkbox" name="answer"
                                           value={`answer-${i}`} id={`answer-${i}`}
                                           onChange={() => setCheckedAnswers(i)}
                                           checked={checkedAnswers[i]}/>
                                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                                </div>
                            </div>
                        );
                    })}
                    <button className="game__submit button" type="submit">Ответить</button>
                </form>
            </section>
        </section>
    )
}


GenreQuestion.propTypes = {
    activeQuestion: PropTypes.object.isRequired,
    numberOfActivePlayer: PropTypes.number.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    checkedAnswers: PropTypes.array.isRequired,
    setAnswers: PropTypes.func.isRequired,
    onAnswerButtonClick: PropTypes.func.isRequired,
};

export default GenreQuestion;
