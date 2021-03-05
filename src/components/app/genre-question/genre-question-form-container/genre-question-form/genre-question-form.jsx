import React from "react";
import PropTypes from "prop-types";
import AudioPlayerContainer from "../../../audio-player/audio-player-container";
import AnswerCheckedContainer from "./answer-checked/answer-checked-container";


const GenreQuestionForm = ({genre, answers, onAnswerButtonClick}) => {

    return (
        <>
            <h2 className="game__title">Выберите {genre}-треки</h2>
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
        </>
    )
};

export default GenreQuestionForm;


GenreQuestionForm.propTypes = {
    genre: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    onAnswerButtonClick: PropTypes.func.isRequired,
}