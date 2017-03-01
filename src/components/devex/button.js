import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import {} from 'devextreme/ui/data_grid';

class button extends Component {
  componentDidMount() {
    this.props.fetchMessage();
    if (1 > 0) {
      $('#datagrid').dxDataGrid({
        'dataSource': [
          {
            'ID': 1,
            'CompanyName': 'Super Mart of the West',
            'City': 'Bentonville',
            'State': 'Arkansas'
          },
          {
            'ID': 2,
            'CompanyName': 'Electronics Depot',
            'City': 'Atlanta',
            'State': 'Georgia'
          },
          {
            'ID': 3,
            'CompanyName': 'K&S Music',
            'City': 'Minneapolis',
            'State': 'Minnesota'
          },
          {
            'ID': 4,
            'CompanyName': "Tom's Club",
            'City': 'Issaquah',
            'State': 'Washington'
          },
          {
            'ID': 5,
            'CompanyName': 'E-Mart',
            'City': 'Hoffman Estates',
            'State': 'Illinois'
          }
        ]
      });
    }
  }
  render() {
    return (
  <div>
    <div>{this.props.message}</div>
    <div id="datagrid"></div>
  </div>
    );
  }
}
function mapStateToProps(state) {
  return { message: state.auth.message };
}
export default connect(mapStateToProps, actions)(button);
