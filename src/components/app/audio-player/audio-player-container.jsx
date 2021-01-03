import React, {useState} from "react";
import AudioPlayer from "./audio-player";

const AudioPlayerContainer = ({src, isPlaying, onPlayButtonClick}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <AudioPlayer
            src={src}
            isPlaying={isPlaying}
            isLoading={isLoading}
            setLoadingStatus={setIsLoading}
            onPlayButtonClick={onPlayButtonClick}
        />
    )
};

export default AudioPlayerContainer;