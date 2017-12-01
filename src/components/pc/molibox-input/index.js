import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Input,Select} from 'antd';
import "./index.css";

const Option = Select.Option;

class Inputs extends Component {
   render() {
      let params = {
         "defaultValue":"mysite",
         "disabled":false,
         "onPressEnter":() => {
            console.log(1);
         },
         "addonAfter":[
            ".com",
            ".cn"
         ],
         "addonBefore":[
            "Http://",
            "Https://"
         ]
      }
      let obj = {},
          selectBefore,
          selectAfter,
          arrBefore = [],
          arrAfter = [],
          defaultValue = "";
      for (var k in params) {
         if (Object.prototype.toString.call(params[k]) !== '[object Array]') {
            obj[k] = params[k];
         } else {
            defaultValue = params[k][0];
            if (k == "addonBefore") {
               params[k].map((e,i) => {
                  return arrBefore.push(
                     <Option value={e}>{e}</Option>
                  );
               });
               selectBefore = (
                  <Select defaultValue={defaultValue}>
                     {arrBefore}
                  </Select>
               );
            } else {
               params[k].map((e,i) => {
                  return arrAfter.push(
                     <Option value={e}>{e}</Option>
                  );
               });
               selectAfter = (
                  <Select defaultValue={defaultValue}>
                     {arrAfter}
                  </Select>
               );
            }
         }
      }
      return (
         <Input addonBefore={selectBefore} addonAfter={selectAfter} {...obj} />
      );
   }
};
export default Inputs;
