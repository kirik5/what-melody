import React from "react";
import ArtistQuestionForm from "./artist-question-form/artist-question-form";
import AudioPlayerContainer from "../../audio-player/audio-player-container";
import {useSelector} from "react-redux";
import {getAnswers, getSongSrc} from "../../../../reducers/question-slice";


const ArtistQuestionFormContainer = () => {
    const songSrc = useSelector(getSongSrc);
    const answers = useSelector(getAnswers);

    return(
        <>
            <div className="game__track">
                <div className="track">

                    <AudioPlayerContainer
                        src={songSrc}
                        id={0}
                    />

                </div>
            </div>

            <ArtistQuestionForm
                answers={answers}
            />
        </>
    )
};

export default ArtistQuestionFormContainer;