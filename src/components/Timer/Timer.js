import React from 'react';
import TimeSlider from "../TimeSlider/TimeSlider";

const Timer = ({time, autoStart, step, onTick, onTimeStart,onTimeEnd}) => {

    return (
        <div>
            <button onClick={onTimeStart}>Press</button>
            <TimeSlider min={0} max={10} value={time}/>
        </div>
    );
};

export default Timer;