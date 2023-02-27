import React from 'react';

import ErrorBoundary from'./components/ErrorBoundary';
import BuggyCounter from'./components/BuggyCounter';

import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Error Boundaries in React</h1>
        <p>A JavaScript error in a part of the UI shouldn’t break the whole app. <br/>
        To solve this problem React (from version 16 and upper) introduces a concept of an “error boundary”.</p>
      </header>

      <h3 style={{textAlign: "center"}}>Error boundaries (предохранители) are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.</h3>

      <p>Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>
      <p><b>Note</b> <br />
        Error boundaries do not catch errors for:<br />
        Event handlers (Предохранители не отлавливают ошибки, произошедшие в обработчиках событий.) <br />
        Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)<br />
        Server side rendering<br />
        Errors thrown in the error boundary itself (rather than its children)<br />
      </p>

      <p>Только классовые компоненты могут выступать в роли предохранителей. На практике чаще всего целесообразным будет один раз описать предохранитель и дальше использовать его по всему приложению.
      </p>

      <p>Классовый компонент является предохранителем(error boundary), <b>если он включает</b> хотя бы один из следующих методов жизненного цикла: <br />
        <b>static getDerivedStateFromError() или <br />
        componentDidCatch().</b>
      </p>
      <p>Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки. <br />
      Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.<br />
      <br />
      Пример в коде компонента 'ErrorBoundary1'
      </p>
      {/* 
        class ErrorBoundary1 extends React.Component {
          constructor(props) {
            super(props);
            this.state = { hasError: false };
          }

          static getDerivedStateFromError(error) {
            // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
            return { hasError: true };
          }

          componentDidCatch(error, errorInfo) {
            // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
            // logErrorToMyService(error, errorInfo);
          }

          render() {
            if (this.state.hasError) {
              // Можно отрендерить запасной UI произвольного вида
              return <h1>Что-то пошло не так.</h1>;
            }

            return this.props.children; 
          }
        }

        <ErrorBoundary1 /> 
        // И можно дальше им пользоваться, как обыкновенным компонентом:
          <MyWidget />
        </ErrorBoundary1>
        */}

      <p>Обратите внимание, что предохранители отлавливают ошибки исключительно в своих дочерних компонентах. Предохранитель не сможет отловить ошибку внутри самого себя.</p>
      
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <p>
      В режиме разработки React 16 выводит на консоль сообщения обо всех ошибках, возникших при рендеринге, даже если они никак не сказались на работе приложения. Tакже выводит и стек вызовов компонентов.
      </p>

      <p>
        Где размещать предохранители? Например, вы можете защитить им навигационные (route) компоненты верхнего уровня, чтобы выводить пользователю сообщение «Что-то пошло не так», как это часто делают при обработке ошибок серверные фреймворки. Или вы можете охватить индивидуальными предохранителями отдельные виджеты, чтобы помешать им уронить всё приложение.
      </p>

      <p>
        try / catch — отличная конструкция, но она работает исключительно в императивном коде:<br />
        В то время, как компоненты React являются декларативными, указывая что должно быть отрендерено.<br />
        Кроме того, в отличие от метода render и методов жизненного цикла, обработчики событий не выполняются во время рендеринга. Чтобы отловить ошибку в обработчике событий, пользуйтесь обычной JavaScript-конструкцией try / catch как показано здесь внутри кода.
      </p>

      {/* class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { error: null };
          this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
          try {
            // Делаем что-то, что сгенерирует ошибку
          } catch (error) {
            this.setState({ error });
          }
        }

        render() {
          if (this.state.error) {
            return <h1>Отловил ошибку.</h1>
          }
          return <button onClick={this.handleClick}>Нажми на меня</button>
        }
      } */}

    </div>
  );
}

export default App;
