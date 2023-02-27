import React from 'react';

import HookUseState from './components/HookUseState';
import HookUseEffect from './components/HookUseEffect';
import HookUseRef from './components/HookUseRef';
import HookUseMemo from './components/HookUseMemo';
import HookUseCallback from './components/HookUseCallback';

import './App.css';

function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <h1>React хуки</h1>
        <p>Хуки — це нововведення в React 16.8, яке дозволяє використовувати СТАН та інші можливості React без написання класів. Хуки дозволяють повторно використовувати логіку СТАНУ не зачіпаючи дерево компонентів. Хуки дозволяють розділити один компонент на маленькі функції по їх призначенню (наприклад, підписка чи завантаження даних).</p>
      </header>
      <main className="App-main">
        <h2>Хук 'useState'</h2>
        <HookUseState />
        <h2>Хук 'useEffect'</h2>
        <HookUseEffect />
        <h2>Хук 'useRef'</h2>
        <HookUseRef />
        <br />
        <h2>Хук 'useMemo'</h2>
        <HookUseMemo />
        <br /><br />
        <h2>Хук 'useCallback'</h2>
        <HookUseCallback />
        <br />
      </main>
      <footer className="App-footer">
        <h4>Volodymyr Sych: React Hooks learning</h4>
        <p>Copywriter reserved</p>
      </footer>
    </div>
  );
}

export default App;
