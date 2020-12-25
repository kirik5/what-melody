import React from "react";
// import PropTypes from "prop-types";
import AudioPlayer from "../../audio-player/audio-player.js";
import Mistakes from "../../mistakes/mistakes";
import Timer from "../../timer/timer";

const GenreQuestion = ({time, activeQuestion, mistakes, players, playing, loading, timeUpdating, nextQuestion, addAnswer, answers, maxTime}) => {

  const goToNextQuestion = (evt) => {
    evt.preventDefault();

    nextQuestion(activeQuestion, answers);
  }

  return (
    <section className="game game--genre">
      <header className="game__header" style={{justifyContent: 'center'}}>
        <a className="game__back" href="/">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <Timer
          time={time}
          maxTime={maxTime}
        />

        <Mistakes
          numberOfMistakes={mistakes}
        />

      </header>
      <section className="game__screen">
        <h2 className="game__title">Выберите {activeQuestion.genre}-треки</h2>
        <form className="game__tracks" onSubmit={goToNextQuestion}>
          {activeQuestion.answers.map((it, i) => {
            return (
              <div key={`answer-${i}`} className="track">

                <AudioPlayer
                  src={it.src}
                  isPlaying={players[i].isPlaying}
                  isLoading={players[i].isLoading}
                  onPlayButtonClick={() => playing(i)}
                  onLoadTrack={() => loading(i)}
                  onTimeUpdate={(time) => timeUpdating(i, time)}
                  // onEndedPlaying={() => endedPlaying(i)}
                />

                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} onClick={() => addAnswer(i)}/>
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


// GenreQuestion.propTypes = {
//   question: PropTypes.object.isRequired,
//
// };

export default GenreQuestion;
