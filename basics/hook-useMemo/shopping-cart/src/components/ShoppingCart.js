import React, { useState, useMemo } from 'react';

function ShoppingCart() {
  // State to store the items in the shopping cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ]);

  /* Calculate the total price of items in the cart. This is the variable
     that holds the memoized result of the function. The first argument is
     a function that contains the code you want to memorize. The second 
     argument is an array of dependencies. If any of these dependencies 
     change between renders, the memoized value will be changed.
  */
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]); 
  /* The calculation is performed only when the cartItems array changes. This
     avoids unnecessary recalculations of the total price when other parts of the 
     component, such as the button click, trigger re-renders. 
  */

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  /* When a new item is added to the cart by clicking the “Add Product D” 
     button, the cartItems the state is updated, and the totalPrice calculation
     is triggered only when the cartItems array changes.
  */

  return (
    <div className='container'>
      <h2>Shopping Cart </h2>
      <ul style={{padding: '20px'}}>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <p style={{color: 'navy'}}>Total Price: <span className='total-price'>${totalPrice}</span></p>
      <p>Length of cart - <span className='length-items'>{cartItems.length}</span></p>
      <button onClick={() => addItemToCart({ id: 4, name: 'Product D', price: 25 })}>
        Add Product D
      </button>
    </div>
  );
}

export default ShoppingCart;
