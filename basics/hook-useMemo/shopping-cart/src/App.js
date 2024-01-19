import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '45px'}}>using useMemo hook in shopping cart example</h1>
      <p style={{margin: '20px'}}>useMemo hook is used for memoization, which is an optimization technique<br />
      to improve the performance of React components. Memoization involves caching <br />
      the results of complex logic so that they can be reused instead of being<br /> 
      reimplemented on every render.</p>
      <ShoppingCart />
      <p style={{textAlign: 'center', marginTop: '45px'}}>useMemo does not come under the category of traditional lifecycle hooks in functional components. It's a hook in React that helps optimize performance by memoizing values, but it doesn't directly correspond to a specific phase in the component's lifecycle like componentDidMount or componentDidUpdate do in class-based components. Instead, useMemo is used to manage computations and memoize values based onchanges in dependencies.
      </p>
    </div>
  );
}

export default App;
