import { useState } from 'react';

import './App.css';

function ProductCategoryRow({ category }) {
  return (
    <tr className='category-size'>
      <th colSpan="2" style={{ color: 'brown', padding: '15px' }}>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );

    lastCategory = product.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input 
        type="text"
        value={filterText}
        placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="container">
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={products}
        filterText={filterText} 
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1.2", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$2.8", stocked: true, name: "Pear"},
  {category: "Fruits", price: "$2.4", stocked: true, name: "Plum"},
  {category: "Fruits", price: "$3.2", stocked: true, name: "Peach"},
  {category: "Fruits", price: "$3.8", stocked: true, name: "Apricot"},
  {category: "Fruits", price: "$3.5", stocked: true, name: "Pineapple"},
  {category: "Fruits", price: "$3.7", stocked: true, name: "Pomegranate"},
  {category: "Fruits", price: "$3.5", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$4", stocked: false, name: "Passionfruit"},
  {category: "Fruits", price: "$4.2", stocked: true, name: "Lychee"},
  {category: "Fruits", price: "$4.5", stocked: false, name: "Papaya"},
  {category: "Fruits", price: "$4.2", stocked: true, name: "Fig"},
  {category: "Fruits", price: "$3.5", stocked: true, name: "Orange"},
  {category: "Fruits", price: "$3.7", stocked: true, name: "Grapefruit"},
  {category: "Fruits", price: "$3.7", stocked: false, name: "Mandarin"},
  {category: "Fruits", price: "$2.9", stocked: true, name: "Guava"},
  {category: "Fruits", price: "$4.5", stocked: false, name: "Dates"},
  {category: "Berries", price: "$3.5", stocked: true, name: "Grape"},
  {category: "Berries", price: "$2.5", stocked: true, name: "Raspberry"},
  {category: "Berries", price: "$4.2", stocked: true, name: "Melon"},
  {category: "Berries", price: "$3.5", stocked: true, name: "Watermelon"},
  {category: "Berries", price: "$3.2", stocked: true, name: "Cherry sweet"},
  {category: "Berries", price: "$3.5", stocked: false, name: "Cherry sour"},
  {category: "Berries", price: "$2.5", stocked: true, name: "Gooseberry"},
  {category: "Berries", price: "$1.8", stocked: true, name: "Currant"},
  {category: "Berries", price: "$2.8", stocked: true, name: "Blackberry"},
  {category: "Berries", price: "$3.5", stocked: false, name: "Mulberry"},
  {category: "Herbs", price: "$2", stocked: true, name: "Spinach"},
  {category: "Herbs", price: "$1.5", stocked: true, name: "Spring onions"},
  {category: "Herbs", price: "$1.1", stocked: true, name: "Parsley"},
  {category: "Herbs", price: "$1.2", stocked: true, name: "Dill"},
  {category: "Herbs", price: "$1.2", stocked: false, name: "Basil"},
  {category: "Herbs", price: "$2.7", stocked: true, name: "Lettuce"},
  {category: "Herbs", price: "$3", stocked: true, name: "Arugula"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Peas"},
  {category: "Vegetables", price: "$1.2", stocked: true, name: "Garlic"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Onion"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Carrot"},
  {category: "Vegetables", price: "$2.2", stocked: true, name: "Beetroot"},
  {category: "Vegetables", price: "$2.5", stocked: true, name: "Cabbage"},
  {category: "Vegetables", price: "$3", stocked: true, name: "Eggplant"},
  {category: "Vegetables", price: "$2.9", stocked: true, name: "Zucchini"},
  {category: "Vegetables", price: "$3.2", stocked: true, name: "Tomato"},
  {category: "Vegetables", price: "$3", stocked: true, name: "Cucumber"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$2.5", stocked: false, name: "Radish"},
  {category: "Vegetables", price: "$3.5", stocked: true, name: "Pod beans"},
];

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Fruit and Vegetable Shop</h2>
      </header>
      <section className="section-table">
        <FilterableProductTable products={PRODUCTS} />
      </section>
    </div>
  );
}
