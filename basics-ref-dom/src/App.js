import React from 'react';
import CustomTextInput from './components/CustomTextInput';
import AutoFocusTextInput from './components/AutoFocusTextInput';
import CustomTextInputFunc from './components/CustomTextInputFunc';
import CustomTextInputCallbackRef from './components/CustomTextInputCallbackRef';
import FancyButton from './components/FancyButton';
import FancyButton2 from './components/FancyButton2';

import './App.css';

function App() {
  const ref = React.createRef(); // Теперь реф будет указывать непосредственно на DOM-узел button
  return (
    <div className="App">
      <header className="App-header">
        <h2>React: Refs and the DOM learning</h2>
        <p>Refs provide a way to access DOM nodes or React elements created in the render method.</p>
      </header>
      <main>
        <p>There are a few cases where you need to imperatively modify a child outside of the typical dataflow.<br />
        The child to be modified could be an instance of a React component, or it could be a DOM element.</p>
        <ul>There are a few good use <b>cases for refs</b>:
          <li>Managing focus, text selection, or media playback.</li>
          <li>Triggering imperative animations.</li>
          <li>Integrating with third-party DOM libraries.</li>
        </ul>
        <p>Refs are created using <b>React.createRef()</b> and attached to React elements via the ref attribute.<br />
        Refs are commonly assigned to an instance property like <b>this.myRef = React.createRef();</b>when a component is constructed so they can be referenced throughout the component.</p>

        <h3>Accessing Refs</h3>
        <p>When a ref is passed to an element in render, a reference to the node becomes accessible at the <b>current attribute</b> of the ref, example: const node = this.myRef.current;</p>
        <ul>The value of the ref differs depending on the type of the node:
          <li>Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.</li>
          <li>Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа получает экземпляр смонтированного компонента.</li>
          <li>You may not use the ref attribute on function components because they don’t have instances.</li>
        </ul>

        <h3>Добавление рефа к DOM-элементу</h3>
        <p>В представленном ниже примере ref используется для хранения ссылки на DOM-элемент. React присвоит DOM-элемент свойству current при монтировании компонента и присвоит обратно значение null при размонтировании. Обновление свойства ref происходит перед вызовом методов componentDidMount и componentDidUpdate.</p>
        <CustomTextInput />
        <br />

        <h3>Добавление рефа к классовому компоненту</h3>
        <p>Для того чтобы произвести имитацию клика по CustomTextInput, сразу же после монтирования, можно использовать реф, чтобы получить доступ к пользовательскому 'input' и явно вызвать его метод focusTextInput:</p>
        <AutoFocusTextInput />
        <br />

        <h3>Рефы и функциональные компоненты</h3>
        <p>По умолчанию нельзя использовать атрибут ref с функциональными компонентами, потому что для них не создаётся экземпляров. Тем не менее, можно использовать атрибут ref внутри функционального компонента при условии, что он ссылается на DOM-элемент или классовый компонент.</p>
        <CustomTextInputFunc />

        <h3>Перенаправление рефов, Передача DOM-рефов родительским компонентам</h3>
        <p>В редких случаях вам может понадобиться доступ к дочернему DOM-узлу из родительского компонента. В общем случае, такой подход не рекомендуется, т. к. ведёт к нарушению инкапсуляции компонента, но иногда он может пригодиться для задания фокуса или измерения размеров, или положения дочернего DOM-узла.</p>
        <p>Несмотря на то, что можно было бы добавить реф к дочернему компоненту, такое решение не является идеальным, т. к. вы получите экземпляр компонента вместо DOM-узла. Кроме того, это не сработает с функциональными компонентами.<br />
        Mы рекомендуем использовать <b>перенаправление рефов</b> для таких случаев. Перенаправление рефов позволяет компонентам осуществлять передачу рефа любого дочернего компонента как своего собственного.
        </p>

        <h3>Колбэк-рефы</h3>
        <p>React поддерживает другой способ определения рефов, который предоставляет более полный контроль над их присвоением и сбросом.<br />
        Вместо того, чтобы передавать атрибут ref созданный с помощью createRef(), вы можете передать функцию. Данная функция получит экземпляр React-компонента или HTML DOM-элемент в качестве аргумента, которые потом могут быть сохранены или доступны в любом другом месте.</p>
        <p>ниже пример реализует общий паттерн: использование колбэка в ref для хранения ссылки на DOM-узел в свойстве экземпляра.</p>
        <CustomTextInputCallbackRef />

        <h3>Перенаправление рефов в DOM-компоненты</h3>
        <p>Перенаправление рефов позволяет автоматически передавать реф компонента одному из его дочерних элементов. Или так, перенаправление рефов позволяет взять ref из атрибутов компонента, и передать («перенаправить») его одному из дочерних компонентов.</p>        
        <FancyButton ref={ref}>Click me!</FancyButton>;

        <h3>Перенаправление рефов в компонентах высшего порядка (HOC)</h3>
        <p>Компонент высшего порядка передаёт все пропсы в компонент, который он оборачивает, так что рендерить они будут одно и то же.<br />
         Но ref это не проп. Подобно key, React обрабатывает ref особым образом. Если вы укажете реф для HOC, он привяжется к ближайшему корню контейнера, а не к переданному в HOC компоненту.<br />
         Следовательно, рефы, предназначенные для одного компонента (у нас FancyButton), окажутся привязанными к другому компоненту (у нас LogProps). <br />
         Mы можем явно перенаправить рефы на компонент FancyButton2 внутри HOC при помощи API React.forwardRef. <br />
         В React.forwardRef передаётся функция рендеринга, которая принимает аргументы props и ref, а возвращает узел React.</p>
        <FancyButton2
          label="Click Me"
          // handleClick={handleClick}
          ref={ref}
        >Click me!</FancyButton2>

        <br />
      </main>
      <footer className="App-footer">
        <h4>Volodymyr Sych: Refs and the DOM learning</h4>
        <p>Copywriter reserved</p>
      </footer>
    </div>
  );
}

export default App;
