import React from "react";
import transformTime from "./serializeTime";
import PropTypes from "prop-types";

const Timer = ({time, maxTime}) => {
    const newTime = transformTime(time);

    const lengthOfStrokeDasharray = 2324;

    let progress = Math.floor((maxTime - time) / maxTime * lengthOfStrokeDasharray);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
                <circle className='timer__line' cx='390' cy='390' r='370' style={{
                    filter: 'url(#blur)',
                    transform: 'rotate(-90deg) scaleY(-1)',
                    transformOrigin: 'center',
                    strokeDasharray: lengthOfStrokeDasharray,
                    strokeDashoffset: progress,
                    // transition: "stroke-dashoffset linear 1s"
                }}/>
            </svg>
            <div className="timer__value">
                <span className="timer__mins">{newTime.minutes}</span>
                <span className="timer__dots">:</span>
                <span className="timer__secs">{newTime.seconds}</span>
            </div>
        </>
    )
};

Timer.propTypes = {
    time: PropTypes.number.isRequired,
    maxTime: PropTypes.number.isRequired,
}

export default Timer;
