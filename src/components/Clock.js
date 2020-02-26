import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h2> It's {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }

  tick() {
    this.state = { date: new Date() };
  }
}

export default Clock;
