import React, { Component, Fragment } from 'react';


class CategoryItems extends Component {

  render() {
    const { categoryItem } = this.props;
    let count = 0;
    return (
      <Fragment>
          {categoryItem && (<table style={{ paddingLeft: 30, marginRight: 30, width: '100%', border: '1px solid black'}}>
          <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Description</strong></td>
          </tr>
          <tr><td><hr /></td><td><hr /></td></tr>
             {categoryItem.map(item =>
               {
                 count++;
                return (<tr key={count+ 'tr1'}>
                    <td key={count + item.name}>{item.name}
                    </td><td key={count + item.description}>{item.description}
                </td></tr>)
               }
            )}
            </tbody>
      </table>)}
        </Fragment>
      )

  };

}

export default CategoryItems;
