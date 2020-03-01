import React, { Component } from "react";
import { ProductAPI } from "./index";

const SearchBar = props => {
  let { filterData, toggleStock } = props;
  return (
    <div>
      <form>
        <input type="text" onChange={e => filterData(e.target.value)} />
        <input type="checkbox" value={false} onChange={toggleStock} />
      </form>
    </div>
  );
};

const ProductRowCategory = ({ item }) => (
  <tr>
    <td>{item.category}</td>
  </tr>
);

const ProductRow = ({ item }) => {
  let name = !item.stocked ? (
    <span style={{ color: "red" }}>{item.name}</span>
  ) : (
    item.name
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{item.price}</td>
    </tr>
  );
};

const sortFunc = (a, b) => {
  if (a.category < b.category) {
    return -1;
  }
  if (a.category > b.category) {
    return 1;
  }
  return 0;
};

const ProductTable = props => {
  let { data, filterText, inStockOnly } = props;
  let lastCategory = null;

  let rows = [];
  data.sort(sortFunc).forEach(e => {
    if (e.name.toLowerCase().indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !e.stocked) {
      return;
    }
    e.category !== lastCategory && rows.push(<ProductRowCategory item={e} />);
    rows.push(<ProductRow item={e} />);
    lastCategory = e.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export class FilterableProductTable extends Component {
  state = {
    inStockOnly: false,
    filterText: ""
  };

  toggleStock = () => {
    this.setState(prevstate => ({
      inStockOnly: !prevstate.inStockOnly
    }));
    console.log(this.state.inStockOnly);
  };

  filterData = item => {
    this.setState({ filterText: item });
  };

  render() {
    // this.setState({inStockOnly: true})
    let { filterText, inStockOnly } = this.state;
    return (
      <>
        <ProductAPI.Consumer>
          {products => (
            <>
              <SearchBar
                filterData={this.filterData}
                inStockOnly={inStockOnly}
                toggleStock={this.toggleStock}
              />
              <ProductTable
                data={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
              />
            </>
          )}
        </ProductAPI.Consumer>
      </>
    );
  }
}
