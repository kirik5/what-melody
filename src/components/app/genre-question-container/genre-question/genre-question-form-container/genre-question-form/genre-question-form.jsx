import React from "react";
import PropTypes from "prop-types";
import AudioPlayerContainer from "../../../../audio-player/audio-player-container";
import AnswerCheckedContainer from "./answer-checked/answer-checked-container";


const GenreQuestionForm = ({answers, onAnswerButtonClick}) => {

    return (
        <form className="game__tracks" onSubmit={onAnswerButtonClick}>
            {answers.map((it, i) => {
                return (
                    <div key={`answer-${i}`} className="track">

                        <AudioPlayerContainer
                            src={it.src}
                            id={i}
                        />

                        <AnswerCheckedContainer
                            id={i}
                        />

                    </div>
                );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
        </form>
    )
};

export default GenreQuestionForm;


GenreQuestionForm.propTypes = {
    answers: PropTypes.array.isRequired,
    onAnswerButtonClick: PropTypes.func.isRequired,
}