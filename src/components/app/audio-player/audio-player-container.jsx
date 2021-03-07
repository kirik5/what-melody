import React, {useState} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "./audio-player";
import {useDispatch, useSelector} from "react-redux";
import {isPlayerPlayingId, newActivePlayer} from "../../../reducers/active-player-slice";


const AudioPlayerContainer = ({src, id}) => {
    const [isLoading, setIsLoading] = useState(true);
    const isPlaying = useSelector(isPlayerPlayingId(id));
    const dispatch = useDispatch();
    const changePlayer = (id) => () => dispatch(newActivePlayer(id));

    return (
        <AudioPlayer
            src={src}
            isLoading={isLoading}
            setLoadingStatus={setIsLoading}
            isPlaying={isPlaying}
            changePlayer={changePlayer(id)}
        />
    )
};

export default AudioPlayerContainer;

AudioPlayerContainer.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};