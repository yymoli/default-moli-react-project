import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {List} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;

class ContentList extends Component {
   render() {
      let {data, columnData, dataArr=[]} = this.props;
      let metaData = {
         "arrow":"horizontal",
         "multipleLine":true,
         "activeStyle":{'background':'yellow'},
         "extra":"extra content",
         "align":"middle",
         "onClick":() => {alert(1)},
         "error":true,
         "wrap":false,
         "platform":"cross"
      };
      data.map((e,i) => {
         return dataArr.push(
            <Item
               thumb={e.avatar ? e.avatar : "https://hongbao-cdn.yonyoucloud.com//uculture/app/user-avator/account.png" }
               {...metaData}
            >
               {e[columnData[0].key]} <Brief>{e[columnData[1].key]}</Brief>
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
