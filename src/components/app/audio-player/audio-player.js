import React from 'react';

// import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this._audioRef = React.createRef();
    this._isIs = true;
  }

  render() {

    return (
      <>
        <button
          className={`track__button track__button--${this.props.isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={this.props.isLoading}
          onClick={this.props.onPlayButtonClick}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;
    audio.src = src;
    audio.oncanplaythrough = () => this.props.onLoadTrack();
    audio.ontimeupdate = () => this.props.onTimeUpdate(audio.currentTime);
    // audio.onended = () => this.props.onEndedPlaying();
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;
    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
    this._audioRef = null;
    this._isIs = false;
  }
}

// AudioPlayer.propTypes = {
//   src: PropTypes.string.isRequired,
//   isPlaying: PropTypes.bool.isRequired,
//   onPlayButtonClick: PropTypes.func.isRequired,
// };

export default AudioPlayer;
