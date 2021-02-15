import React, {Component} from 'react';

import FilterableProductTable from './components/FilterableProductTable';

import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Sporting Goods', price: '$15.26', stocked: false, name: 'Handball'},
  {category: 'Sporting Goods', price: '$21.42', stocked: true, name: 'Volleyball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  {category: 'Electronics', price: '$199.99', stocked: false, name: 'iPod Air'},
  {category: 'Electronics', price: '$599.99', stocked: true, name: 'iPhone 10'},
  {category: 'Electronics', price: '$299.99', stocked: true, name: 'Nexus 9'}
];

class App extends Component {  
  render() {
    return (
      <div className="container">
        <FilterableProductTable products={PRODUCTS} />
      </div>
    )
  }
}

export default App;
