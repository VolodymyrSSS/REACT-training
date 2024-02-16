import React from 'react';

import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

import './FilterableProductTable.css';

/* что должно храниться в состоянии. Задайте себе три вопроса:
Передаются ли они от родителя через пропсы? Если так, тогда эти данные не должны храниться в состоянии компонента.
Остаются ли они неизменными со временем? Если так, тогда их тоже не следует хранить в состоянии.
Можете ли вы вычислить их на основании любых других данных в своём компоненте или пропсов? Если так, тогда это тоже не состояние.
*/

/* Исходный список товаров передаётся через пропсы, так что не нужно хранить его в состоянии компонента. Поисковый запрос и состояние чекбокса изменяются со временем, и их нельзя вычислить из других данных, так что они вполне сойдут за состояние. Напоследок, отфильтрованный список товаров не является состоянием, так как его можно вычислить из оригинального списка, поискового запроса и значения чекбокса. */

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // отобразить начальное состояние
      filterText: '', // здесь будет поисковый запрос, введённый пользователем
      inStockOnly: false // здесь будет значение чекбокса
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div className="table-field">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
