import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>The tic tac toe</h1>
      </header>
      <section>
        <div className="container">
          <Game />
        </div>
      </section>
      <footer className="app-footer">
        <h3>&copy; Created by Volodymyr Sych 2021</h3>
      </footer>
    </div>
  );
}

export default App;
