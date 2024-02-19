import { useState } from 'react';

export function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved
  const [xIsNext, setXIsNext] = useState(true);
  //  creates an array with nine elements and sets each of them to null
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    // to check to see if the square already has a "X" or an "O"
    // or to check if a player has already won
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    
    // to update the squares array holding board’s state
    const nextSquares = squares.slice(); // creates a copy of the squares array

    // to alternate between "X" and "O"
    if (xIsNext) {
      nextSquares[index] = "X"; // updates the nextSquares array
    } else {
      nextSquares[index] = "O"; // updates the nextSquares array
    }

    // trigger a re-render of the components that use the squares state as well as its child components
    setSquares(nextSquares); 
    setXIsNext(!xIsNext); // to flip the value of xIsNext
  }

  function calculateWinner(squares) {
    // визначені виграшні лінії/ряди - послідовність квадратів створюють виграшну лінію/ряд
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // якщо одинакові символи у трьох квадратах співпадають із виграшною комбінацією лінії/рядка
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // ітерація по лініях/рядах
      // символи повинні бути усі однакові
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // повернути умовно визначений символ переможця!
      }
    }
    return null; // нічого не виводяться бо квадрат не має символа "X" чи "O"
  }

  // to let the players know when the game is over
  const winner = calculateWinner(squares);
  let status; // add status to display winner
  if (winner) {
    status = "Winner: " + winner; // to display which player won
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); // to display which player’s turn is next
  }

  return (
    <div className="container">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div className="titles">Tic-Tac-Toy Game</div>
    </div>
  );
}