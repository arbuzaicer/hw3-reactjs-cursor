import React from "react";
import TimerContainer from "./components/TimerContainer/TimerContainer";

const App = () => (
    <div className='App'>
        <TimerContainer
            time={5}
            timerName = "Timer 1"
            step = {1}
            autosStart ={false}
            isInfinite = {false}
        />
        <TimerContainer
            time={15}
            timerName = "Timer 2"
            step = {2}
            autoStart={false}
            isInfinite={false}
        />
    </div>
);

export default App;
