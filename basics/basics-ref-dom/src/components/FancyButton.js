import React from 'react';

/* В данном примере мы используем React.forwardRef в компоненте FancyButton, чтобы получить реф и передать его в дочерний DOM-элемент button */

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Теперь поместим код ниже в Арр и там реф будет указывать непосредственно на DOM-узел button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;

export default FancyButton;
