import { Slider } from 'antd';
import React from 'react';

const style = {
    display: 'grid',
    gridRow: '3',
    gridColumn: '1/4',
    height: 300
};

const TimeSlider = ({value, min, max}) => {
    return (
        <div style={style}>
            <Slider vertical min={min} max={max} value={value} />
        </div>
    );
};

export default TimeSlider;