import React from "react";
// import PropTypes from "prop-types";
import AudioPlayer from "../../audio-player/audio-player";
import Mistakes from "../../mistakes/mistakes";
import Timer from "../../timer/timer";

const ArtistQuestion = ({time, activeQuestion, mistakes, player, playing, loading, timeUpdating, nextQuestion, maxTime}) => {
  return (
    <section className="game game--artist">
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
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

            <AudioPlayer
              src={activeQuestion.song.src}
              isPlaying={player.isPlaying}
              isLoading={player.isLoading}
              onPlayButtonClick={() => playing()}
              onLoadTrack={() => loading()}
              onTimeUpdate={(time) => timeUpdating(time)}
              // onEndedPlaying={() => endedPlaying(i)}
            />

          </div>
        </div>

        <form className="game__artist" onSubmit={(evt) => evt.preventDefault()}>

          {activeQuestion.answers.map((it, i) => {
            return (
              <div key={`answer-${i}`} className="artist">
                <input className="artist__input visually-hidden" type="radio" name="answer" value={it.artist}
                       id={`answer-${i}`} onClick={(evt) => nextQuestion(activeQuestion, evt.target.value)}/>
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

// ArtistQuestion.propTypes = {
//   question: PropTypes.object.isRequired,
//   onAnswer: PropTypes.func.isRequired,
//   numberOfQuestion: PropTypes.number.isRequired,
//   mistakes: PropTypes.number.isRequired,
//   maxMistakes: PropTypes.number.isRequired,
// };

export default ArtistQuestion;
