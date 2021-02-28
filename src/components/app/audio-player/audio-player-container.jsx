import React, {useState} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "./audio-player";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {newActivePlayer} from "../../../reducers/active-player-slice";


const AudioPlayerContainer = ({src, id}) => {
    const [isLoading, setIsLoading] = useState(true);

    const isPlayerPlaying = createSelector(
        state => state.activePlayer.activePlayer,
        number => number === id,
    );

    const isPlaying = useSelector(isPlayerPlaying);

    const dispatch = useDispatch();

    const changePlayer = () => dispatch(newActivePlayer(id));


    return (
        <AudioPlayer
            src={src}
            isLoading={isLoading}
            setLoadingStatus={setIsLoading}
            isPlaying={isPlaying}
            changePlayer={changePlayer}
        />
    )
};

export default AudioPlayerContainer;


AudioPlayerContainer.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};