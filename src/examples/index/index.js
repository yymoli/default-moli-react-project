import React,{ Component} from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import {ajax} from 'api/ajax';

import appComponentManage from 'api/appComponentManager'
import NavBar from '../../components/navbar/index'
import Icon from '../../components/icon/index'
// import List from 'widget/molibox-list/molibox-list'

import "./index.css"

var locale = require("../i18n/language.json");

class WorkSpace extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            metaData: {},
            data:[],
            changeData:{},
            data_params:{},
            headerData:{}
        }
        this.initThemes();
    }
    /**
     *
     */
    componentWillMount(){
        //debugger;
        if(window.data_params){
            var data_param = $summer.strToJson(window.data_params);
            this.setState({
                data_params: data_param
            })
        }

    }

    componentDidMount() {
        this.init();
    }

    initThemes(){
        let defaultThemeesPath = "../static/themes/default/css/iuapmobile.um.css";
        let selThemesPath = localStorage.getItem("selThemes");
        if(selThemesPath){
            defaultThemeesPath = selThemesPath;
        }
        let link = document.querySelector("#themeslink");
        if(link){
            if(selThemesPath){
                link.setAttribute("href", defaultThemeesPath);
            }
        }else{
            let head = document.getElementsByTagName('head')[0];
            let newlink = document.createElement('link');
            newlink.id = "themeslink";
            newlink.href = defaultThemeesPath;
            newlink.rel = 'stylesheet';
            newlink.type = 'text/css';
            head.appendChild(newlink);
        }
    }

    init = () => {
        if ($summer.os == 'pc') {
            // this.getData();
            this.getHeaderData();
        } else {
            summer.on("ready", this.getData);
        }
    }

    /*getData = () => {
      let _this = this;
      // 这里应该是上一个页面传过来的
      ajax({
          "type": "get",
         //  "url": "/userlink/getMyTableList",
          "url": "/rest/user",
          "param":{
               "componentCode":"demo",
               "viewCode":"demo",
               "lang":"CN"
          },
      },function(data){
          if(data.metas){
               let metasFianal=data.metas.demo.properties;
               _this.setState({metaData : metasFianal});
          }
          let listData = data.views.User.records;

          _this.setState({ data : listData});
      },function(res){
          console.log(res);
      });
    }*/
    getHeaderData = () => {
        let _this = this;
        // 这里应该是上一个页面传过来的
        ajax({
            "type": "get",
            //"url": "/user/find",
            "url": "/userlink/header",
            "param":{
                "meta": JSON.stringify({
                    "clientType": $summer.os,
                    "componentId":"card001"
                }),
            },
        },function(data){
            _this.setState({
                headerData: data
            });

        },function(res){
            console.log(res);
        });
    }

    closeFn =() => {
        appComponentManager.closeComponent({
            componentId: "cardView"
        });
    }

    save = () => {
        let data = this.state.changeData;

    }

    changeFn = (allD) => {
        alert("开发中...")
    }
    openaaa =() => {
        alert(123)
    }
    switchThemes = ()=> {
        let link = document.querySelector("#themeslink");
        let href = link.getAttribute("href");
        if(href && href.indexOf('static/themes/')){


        }

        let curT = href.split('static/themes/')[1].split('/')[0];
        let Ts = ["blue","gray","green","orange","red"];

        let newT = Ts.splice(Ts.indexOf(curT)-1,1);
        let news = `../static/themes/${newT}/css/iuapmobile.um.css`;
        link.setAttribute("href", news);
        localStorage.setItem("selThemes",news);
    }
    render() {
        let _this = this;
        let headerData=this.state.headerData;
        let mode,iconname,title;
        if(JSON.stringify(headerData) != "{}"){
            mode = headerData.data.mode;
            iconname = <Icon type={headerData.data.leftIconName} />;
            title=headerData.data.children;
        }
        /*let content=null;
        if(this.state.data.length==0){
            content= <img src="../static/img/preload.png" alt="" className="loading-img"/>
        }else {
            content=<List data={this.state.data} metaData={this.state.metaData} />
        }*/
        return (
            <div className="um-win">
                <div className="um-header um-theme-color2">
                    <NavBar rightContent={<div onClick={this.switchThemes} >{locale.modifyTheme}</div>}>{title} </NavBar>
                </div>
                <div className="um-content">
                    {locale.welcomeTongue}

                </div>
                <div className="um-footer">

                </div>
            </div>
        )
    }
}

ReactDOM.render(<WorkSpace/>, document.querySelector("#app"))
