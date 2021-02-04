import React, {Component} from 'react'

class App extends Component {
  state = {
    data: [],
  }

  /* React lifecycle method. Lifecycle is the order in which methods are called in React. Mounting refers to an item being inserted into the DOM. */

  // code is invoked after the component is mounted/inserted into the DOM tree
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    // we use JavaScript's built-in Fetch to gather the data from that URL endpoint and display it
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App