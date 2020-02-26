import React, { Component } from "react";

import Player from "./choosePlayer";

class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }

  handleReset() {
    this.props.reset();
  }

  renderHTML() {
    if (this.props.winner) {
      return (
        <div>
          <h2>Winner is '{this.props.winner}' </h2>
        </div>
      );
    } else {
      return this.props.player ? (
        <h2>Next Player is {this.props.player} </h2>
      ) : (
        <Player player={e => this.handleSetPlayer(e)} />
      );
    }
  }
  render() {
    return this.renderHTML();
  }
}

export default Status;
