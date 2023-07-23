import React, { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";
import { Continue } from "./components/Continue";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  const Booyah = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplay, setxplay] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setgameOver] = useState(false);
  const [wwin, setwwin] = useState(null);
  const handleBoxClick = (boxidx) => {
    const Upboard = board.map((value, idx) => {
      if (idx === boxidx) {
        return xplay === true ? "X" : "O";
      } else return value;
    });
    const win = winner(Upboard);
    if (win) {
      if (win === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(Upboard);
    setxplay(!xplay);
  };

  const winner = (board) => {
    for (let i = 0; i < Booyah.length; i++) {
      const [x, y, z] = Booyah[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setgameOver(true);
        setwwin([board[x]]);
        Swal.fire({
          title: board[x]+' won',
          width: 600,
          padding: '2em',
          color: '#716add',
          background: '#fff',
        })
        return board[x];
      }
    }
  };
  const Ngame = () => {
    setBoard(Array(9).fill(null));
    setScores({ xScore: 0, oScore: 0 });
    setwwin();
  };
  const resetBoard = () => {
    setgameOver(false);
    setBoard(Array(9).fill(null));
    setwwin();
  };
  return (
    <div className="App">
      <div className="heading">TIC TAC TOE</div>
      <p className="www">
        Winner: {wwin} <DarkMode />{" "}
      </p>
      <ScoreBoard scores={scores} xplay={xplay} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <Continue resetBoard={resetBoard} Ngame={Ngame} />
    </div>
  );
}

export default App;
