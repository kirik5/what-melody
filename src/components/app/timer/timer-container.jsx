import React from "react";
import Timer from "./timer";
import {useSelector} from "react-redux";

const TimerContainer = (props) => {
    const time = useSelector(state => state.timer.currentTime);
    const maxTime = useSelector(state => state.timer.maxTime);

    return (<Timer
        time={time}
        maxTime={maxTime}
    />)
};

export default TimerContainer;