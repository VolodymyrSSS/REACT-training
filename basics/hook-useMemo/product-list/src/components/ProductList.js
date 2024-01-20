import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

// This approach helps optimize the API GET call in your React application.
function ProductList() {
  // State for storing the product list
  const [products, setProducts] = useState([]); // to manage the product list

  // State for tracking any relevant dependencies for memoization
  const [dependency, setDependency] = useState(0);
  // A "dependency" state variable to trigger & prefetching when needed

  // Define a memoized function for fetching the product list
  const fetchProductList = useMemo(() => async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  }, [dependency]); //  It only recreates itself if the dependency value changes.

  // Fetch the product list on component mount
  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]); // to trigger the initial fetch when the component mounts.

  return (
    <div className='container'>
      <h2 style={{textAlign: 'center'}}>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title} - <span className='item-price'>${product.price}</span></li>
        ))}
      </ul>
      {/* manually refresh the product list by incrementing the dependency value*/ }
      <button onClick={() => setDependency(dependency + 1)}>
        Click to Refresh Product List
      </button> -- <p className='after-btn-text'>dispate the api calls there were no rerenders</p>
    </div>
  );
}

export default ProductList;