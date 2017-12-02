import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import { List, InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

class Inputs extends Component {
   render() {
      let params = {
         "placeholder" : "input",
         // "defaultValue" : "123",
         "type" : "money",
         "moneyKeyboardAlign" : "left",
         "disabled":false,
         "editable":true,
         "clear":true,
         "onChange":() => {
            console.log("Change");
         },
         "onBlur":() => {
            console.log("Blur");
         },
         "onFocus":() => {
            console.log("Focus");
         },
         "onErrorClick":() => {
            console.log("ErrorClick");
         },
         "error":false,
         "extra":"extra",
         "onExtraClick":() => {
            console.log("ExtraClick");
         }
      };
      return (
         <List>
            <InputItem
               {...params}
            >
               请输入：
            </InputItem>
         </List>
      );
   }
};

export default Inputs;
