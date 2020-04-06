import { Slider } from 'antd';
import React from 'react';

const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
};

const TimeSlider = ({value, min, max}) => {
    console.log(value)
    return (
        <div style={style}>
            <Slider vertical min={min} max={max} value={value} />
        </div>
    );
};

export default TimeSlider;