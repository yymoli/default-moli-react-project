import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {List} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const Item = List.Item;
const Brief = Item.Brief;

class ContentList extends Component {
   render() {
      let {data, metaData, dataArr=[]} = this.props;
      data.map((e,i) => {
         return dataArr.push(
            <Item
               arrow="horizontal"
               thumb={e.avatar}
               multipleLine
               onClick={() => {}}
            >
               {e.name} <Brief>{e.departmentName}</Brief>
            </Item>
         );
      });
      return (
         <div className="list um-content">
            <div className="content">
               <List className="my-list">
                  {dataArr}
               </List>
            </div>
         </div>
      );
   }
};

export default ContentList;
