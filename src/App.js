import React, {Component} from 'react';
import Timer from "./components/Timer/Timer";

class App extends Component {
    state = {
        time: 5,
        defTime: 5,
        step: 1,
        autosStart: false
    };

    onTick = () => {
        console.log("Осталось времени: " + this.state.time)
    }

    onTimeStart = () => {
        console.log("Таймер запущен!!!")
        let timerId = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            });
            if (this.state.time < 1) {
                this.setState({
                    time: this.state.defTime
                });
            }
        }, this.state.step * 1000)


    };

    onTimeEnd = () => {
        console.log("Время вышло!")
    }

    setTimeHandler = (e) => {
        this.setState({
            time: Number(e.target.value)
        })
    };

    render() {
        return (
            <div className="App">
                <input type="number" value={this.state.time} onChange={(event) => this.setTimeHandler(event)}/>
                <Timer
                    time={this.state.time}
                    step={this.state.step}
                    autosStart={this.state.autosStart}
                    onTick={this.onTick}
                    onTimeStart={this.onTimeStart}
                    onTimeEnd={this.onTimeEnd}
                />
            </div>
        )
    }
}

export default App;
