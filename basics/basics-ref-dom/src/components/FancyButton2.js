import React from 'react';
import FancyButton from './FancyButton';

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Передаём в качестве рефа проп "forwardedRef"
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Обратите внимание, что React.forwardRef передает "ref" вторым аргументом.
  // Мы можем передать его дальше как проп, например, "forwardedRef",
  // а потом привязать его к компоненту.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

// Вместо экспорта FancyButton, мы экспортируем LogProps.
// Рендериться при этом будет FancyButton.
export default logProps(FancyButton);
