import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import {Tabs, Badge} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

class Tab extends Component {
   render() {
      let {metaData, data, arr=[], tabs=[]} = this.props;
      data.map((e,i) => {
         return arr.push(
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '150px',
                  backgroundColor: '#fff'
               }}
               >{e.content}</div>
            );
         });
         data.map((e,i) => {
            return tabs.push(
               {title: <Badge text={'今日(20)'}>{e.title}</Badge>}
            );
         });
      return (
         <Tabs
            tabs={tabs}
            initialPage={metaData.defaultActiveKey ? metaData.defaultActiveKey : "0"}
            onChange={metaData.onChange ? eval('('+metaData.onChange+')') : () => {}}
            onTabClick={metaData.onChange ? eval('('+metaData.onChange+')') : () => {}}
         >
            {arr}
         </Tabs>
      );
   }
};

export default Tab;
