import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';


const AudioPlayer = ({src, isLoading, setLoadingStatus, isPlaying, changePlayer}) => {

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        audio.src = src;
        audio.oncanplaythrough = () => setLoadingStatus(false);
        // audio.ontimeupdate = () => this.props.onTimeUpdate(audio.currentTime);

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.oncanplaythrough = null;
            audio.onplay = null;
            audio.onpause = null;
            audio.ontimeupdate = null;
            audio.src = ``;
        }
    }, [src, isLoading, isPlaying, setLoadingStatus]);

    return (
        <>
            <button
                className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
                type="button"
                disabled={isLoading}
                onClick={changePlayer}
            />
            <div className="track__status">
                <audio
                    ref={audioRef}
                />
            </div>
        </>
    )
};

AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setLoadingStatus: PropTypes.func.isRequired,
    changePlayer: PropTypes.func.isRequired,
};

export default AudioPlayer;
