import React, {Fragment} from 'react';
import OuterClickExample from './components/OuterClickExample';
import BlurExample from './components/BlurExample';

import './App.css';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <h2>Mouse and pointer events</h2>
      </header>
    </div>
    <div>
      <p>This is the outside click pattern, where a user can disable an opened popover by clicking outside the element. This is typically implemented by attaching a click event to the window object that closes the popover.</p>

      <OuterClickExample />

      <p>Доступность контента происходит только на щелчок мыши. Здесь показан паттерн закрытия всплывающего списка при щелчке мышью за пределами этого элемента.</p>

      <BlurExample />

      <p>С этой программой можно работать и с помощью клавиатуры, и с помощью координатного устройства. Также в неё добавлены атрибуты aria-* для людей, использующих экранные считывающие устройства. Для упрощения примера, в нём не реализовано перемещение по списку с помощью стрелок на клавиатуре.</p>
    </div>
    </Fragment>
  );
}

export default App;
