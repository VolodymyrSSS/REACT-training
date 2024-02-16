import Inputs from './components/Inputs.jsx';

function App() {
  return (
    <div className="container">
    <h2>The task:</h2>
    <h3>create form component with 2 input fields (name and age) and Submit button.</h3>
    <h3>on click on Submit current values of the input fields should be logged to console (console.log())</h3>
    <Inputs />
    </div>
  );
}

export default App;
