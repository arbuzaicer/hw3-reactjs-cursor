import React, { Component } from "react";
import Timer from "../Timer/Timer";

class TimerContainer extends Component {
  onTimeStart = () => {
    console.log("Таймер запущен!");
  };

  onTick = (time) => {
    console.log("Осталось времени: " + time);
  };
  onTimePaused = () => {
    console.log("Время на паузе!");
  };

  onTimeEnd = () => {
    console.log("Время вышло!");
  };

  render() {
    const placeholderText = `Timer start with ${this.props.time} s`;
    return (
      <div className="timer">
        <Timer
          time={this.props.time}
          timerName={this.props.timerName}
          step={this.props.step}
          autoStart={this.props.autoStart}
          isInfinite={this.props.isInfinite}
          onTimeStart={this.onTimeStart}
          onTick={this.onTick}
          onTimeEnd={this.onTimeEnd}
          onTimePaused={this.onTimePaused}
          placeholder = {placeholderText}
        />
      </div>
    );
  }
}

export default TimerContainer;
