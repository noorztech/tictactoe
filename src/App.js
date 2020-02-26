import React, { Component } from "react";

import "./App.css";

import Status from "./components/Status";
import Clock from "./components/Clock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
      count: 0
    };
  }

  setPlayer(player) {
    console.log(player);
    this.setState({
      player: player
    });
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],

      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],

      ["0", "4", "8"],
      ["2", "4", "6"]

    ];

    this.checkMatch(winLines);
  }
  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        alert(this.state.player + " won");
        this.setState({
          winner: this.state.player
        });
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;

        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
          count: this.state.count + 1
        });
      }

      this.checkWinner();
    }
  }

  reset() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <Status
          player={this.state.player}
          winner={this.state.winner}
          setPlayer={e => this.setPlayer(e)}
        />
        <div className="board">{this.renderBoxes()}</div>
        <button
          disabled={!this.state.winner && this.state.count < 9}
          onClick={() => this.reset()}
        >
          Reset
        </button>

        <Clock />
      </div>
    );
  }
}

export default App;
