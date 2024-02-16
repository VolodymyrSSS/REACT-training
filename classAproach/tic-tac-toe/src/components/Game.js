import React, { Component } from 'react'
import Board from './Board'

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
       {
        squares:Array(9).fill(null)// початковий стан гри (всі клітинки пусті - заповнені 'null')
       }
      ],
      stepNumber: 0, // для вказання номера ходу, який зараз відображається
      xIsNext: true, // визначаєм перший (за 'Х') хід і далі наступні будуть чередуватись
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);// якщо повернемось назад і потім зробимо новий крок з цьої точки - то попередня майбутня історія видалиться 
    const current = history[history.length - 1];
    const squares = current.squares.slice();// для створення копії масиву 'squares'
    if (this.calculateWinner(squares) || squares[i]) { 
      return; // для виходу та ігнорування кліка якщо хтось вже переміг чи клітинка вже заповнена
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ // метод concat() не змінює початковий масиви
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }


  // для перевірки переможця
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(squares);
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // для поновлення stepNumber
  jumpTo(step) {
    this.setState({
      stepNumber: step, // вказує номер ходу, який відображається гравцю
      xIsNext: (step % 2) === 0,// якщо номер ходу на який ми міняємо є парний
    });
  }

  render() {
    // щоб використати останній запис з історії для визначення і відображення статусу гри
    const history = this.state.history;
    const current = history[this.state.stepNumber]; // щоб рендерити хід, який відповідає stepNumber
    const winner = this.calculateWinner(current.squares); // чи виграв гравець

    const moves = history.map((step, move) => {
      const desc = move ? 'Перейти на хід ' + move : 'На початок гри';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Переміг ' + winner;
    } else {
      status = 'Cлідуючий хід за: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game
