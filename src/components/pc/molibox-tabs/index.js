import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';
import "./index.css";

const TabPane = Tabs.TabPane;

class Tab extends Component {
   render() {
      let {metaData, data, arr=[], obj={}} = this.props;
      console.log(metaData,data);
      data.map((e,i) => {
         return arr.push(
            <TabPane
               tab={e.title}
               key={i.toString()}
               disabled={e.disabled ? e.disabled : false}
            >{e.content}</TabPane>
         );
      });
      return (
         <Tabs
            onChange={metaData.onChange ? eval('('+metaData.onChange+')') : () => {}}
            defaultActiveKey={metaData.defaultActiveKey ? metaData.defaultActiveKey : "0"}
         >
            {arr}
         </Tabs>
      );
   }
};
export default Tab;
