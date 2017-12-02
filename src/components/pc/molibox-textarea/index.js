import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import "./index.css";

const { TextArea } = Input;

class TextAreas extends Component {
   render() {
      let params = {
         // "defaultValue":"1123",
         "placeholder":"请在此输入内容...",
         "autosize":{minRows: 2, maxRows: 6},
         "onPressEnter":() => {
            console.log(1);
         }
      }
      return (
         <div>
            <TextArea {...params} />
         </div>
      );
   }
};
export default TextAreas;
