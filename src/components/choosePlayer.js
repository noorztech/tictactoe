import React, { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form onSubmit={e => this.handleForm(e)}>
        <lable>
          Player X<input type="radio" name="player" value="X" />
        </lable>
        <lable>
          Player O<input type="radio" name="player" value="O" />
        </lable>
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default Player;
