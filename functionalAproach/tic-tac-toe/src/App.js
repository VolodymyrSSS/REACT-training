import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {

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

    // the Game component can update the Board when the user clicks a square - to update Game’s state to trigger a re-render
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    // виграшні ряди - послідовність квадратів у ряді, які створюють виграшну комбінацію
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

    // перевірка чи символи у трьох квадратах співпадають із виграшним рядом
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // ітерація по рядах
      // символи повинні бути усі однакові
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // повернути умовно визначений символ переможця!
      }
    }
    return null; // нічого не виводяться бо квадрат не має символа "X" чи "O"
  }

  // визначити гравцю коли кінець гри
  const winner = calculateWinner(squares);
  let status; // додати статус щоб показати переможця
  if (winner) {
    status = "Winner: " + winner; // показати переможця
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); // показати чергу наступному гравцю
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

export default function Game() {
  // xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved
  const [xIsNext, setXIsNext] = useState(true);
  //  allow to store every past version of the history array, and navigate between the turns
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // to keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0);

  // to render the squares for the current move, you need to read the last squares array from the history
  // const currentSquares = history[history.length - 1];
  // to render the currently selected move, instead of always rendering the final move
  const currentSquares = history[currentMove];

  // will be called by the Board component to update the game - to update Game’s state to trigger a re-render
  function handlePlay(nextSquares) {
    // to update history by appending the updated squares array as a new history entry
    // setHistory([...history, nextSquares]); // creates a new array that contains all the items in history, followed by nextSquares

    /*If you "go back in time" and then make a new move from that point, you only want to keep 
      the history up to that point. Instead of adding nextSquares after all items (... spread 
      syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) 
      so that you’re only keeping that portion of the old history.*/
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    // to update currentMove to point to the latest history entry
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext); // to flip the value of xIsNext
  }

  // to update that currentMove
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // set xIsNext to true if the number that you’re changing currentMove to is even
    setXIsNext(nextMove % 2 === 0);
  }

  /*Коли ітеруємо по масиву history в функції, яку ми передали для відображення, 
    аргумент squares проходить через кожен елемент history, а аргумент move проходить 
    через кожен індекс масиву: 0, 1, 2, …. (У більшості випадків нам знадобляться 
    фактичні елементи масиву, але для візуалізації списку moves вам знадобляться лише
    індекси.)
  */

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    /*Також, значення moves ніколи не буде змінено, видалено чи вставлено 
      в середину, а тому досить безпечно використовувати індекс move як ключ. 
    */
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h5>Return to previous step</h5>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
