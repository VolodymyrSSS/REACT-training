import React from 'react';

/* There must be one source of truth for any mutable data in a React application. Usually the state is first added to the component that needs it to render. Then, if other components also need it, you can elevate it to the closest common ancestor. Instead of trying to synchronize state between different components, you should rely on unidirectional data flow */

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // Ранее было так: this.state = {temperature: ''};
  }

  handleChange(e) {
    // Ранее было так: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    // Теперь, когда TemperatureInput хочет обновить свою температуру, он вызывает this.props.onTemperatureChange:
  }

  render() {
    /* Знаем, что пропсы доступны только для чтения. Когда temperature находилась во внутреннем состоянии, TemperatureInput мог просто вызвать this.setState() для изменения его значения. Однако теперь, когда temperature приходит из родительского компонента в качестве пропа, TemperatureInput не может контролировать его. Решается путём создания «управляемого» компонента - должен принять оба пропса temperature и onTemperatureChange от своего родителя BoilingWaterCalculator*/
    // Ранее было так: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange} 
        />
      </fieldset>
    );
  }
}


class BoilingWaterCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'}; // состояние, которое мы «подняли» от полей ввода, и теперь оно будет служить «источником истины»
  }
  /* Теперь, независимо от того, какое поле ввода вы редактируете, this.state.temperature и this.state.scale в BoilingWaterCalculator обновляются */

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  /* Одно из полей ввода получает значение как есть, поэтому введённые пользователем данные сохраняются, а значение другого поля ввода всегда пересчитывается на их основе */
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default BoilingWaterCalculator;