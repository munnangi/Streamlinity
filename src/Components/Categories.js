import React, { Component, Fragment } from 'react';
import CategoryItems from './CategoryItems';


class Categories extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: null,
        categoryItem: null,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    fetch('https://stream-restaurant-menu-svc.herokuapp.com/item?category='+ e.target.id)
      .then(response => response.json())
      .then(categoryItem => this.setState({ categoryItem }));

  }

  componentDidMount() {
    fetch('https://stream-restaurant-menu-svc.herokuapp.com/category')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }



  render () {
      const {data, categoryItem} = this.state;
    return (
      <Fragment>
      <ul>
      { data && data.map(category => {
        return(
            <li key={category.id} id={category.short_name} onClick={this.handleOnClick} >
              {category.name + ' - ' + '('+ category.short_name + ')'}
          </li>
        );
      }
      )}
      </ul>
      { categoryItem && <CategoryItems categoryItem={categoryItem} />}
      </Fragment>
    );
  }
}

export default Categories;
