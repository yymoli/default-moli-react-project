import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Table from 'bee-table';
import "bee-table/build/Table.css"
class ContentList extends Component {
    render() {
        let {data, metaData, columnData=[]} = this.props;
        for(let k in data[0]){
           if (k !== "avatar") {
             columnData.push({
                "title":"",
                "key":k,
                "dataIndex":k,
                "render":null
             })
           }
        }
        columnData.map((e,i) => {
           if(metaData[columnData[i].dataIndex]){
               metaData[columnData[i].dataIndex].name ?
               columnData[i].title = metaData[columnData[i].key].name :
               "";
               if(metaData[columnData[i].dataIndex].style){
                  let bodyStyle = metaData[columnData[i].dataIndex].style;
                  columnData[i].render = (text) => {
                     return <span style={eval('(' + bodyStyle + ')')}>{text}</span>
                  }
               }
               if(metaData[columnData[i].dataIndex].display=="none"){
                   columnData.splice(i,1);
                   --i;
               }
           }
        });
        return (
            <div className="list um-content">
                <Table
                    columns={columnData}
                    data={data}
                />
            </div>
        );
    }
};
ContentList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
export default ContentList;
