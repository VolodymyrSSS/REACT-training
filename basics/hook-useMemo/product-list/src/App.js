import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '45px'}}>using hook useMemo in product list application</h1>
      <p className='enter-text'>Optimizing API calls in a React.js application is crucial for improving performance and user experience.<br /> 
        Here are some best practices and techniques to optimize API calls in React:<br />
        1. Use State Management; 2. Memoization; 3. Debounce and Throttle; 4. Lazy Loading; 5. Caching; 6. Pagination; 7. Reduce Component Rerenders.<br />
        By using React.memo, PureComponent, or the useMemo hook we are able to prevent unnecessary component rerenders triggered by API calls or state changes.
      </p>
      <ProductList />
    </div>
  );
}

export default App;
