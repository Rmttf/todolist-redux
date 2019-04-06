import React,{ Component } from 'react';
import './index.css';
import Item from '../Item/index';
import { Row,Col } from "antd";

import { mapStatetoContainerProps,mapDispatchtoContainerProps } from "../../reducer/reducer";
import { connect } from "react-redux";

class List1 extends Component {
    render() {
        let item_list = <li>还没有内容</li>,
            items = this.props.data;
        if (items && typeof items[0] == 'object') {
            item_list = [];
            for (let i=0;i<items.length;i++){
                item_list.push(<Item key={items[i].id} id={items[i].id} content={items[i].content} complete={items[i].complete}/>)
            }
        }

        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={10}>
                    <ul>
                        {item_list}
                    </ul>
                </Col>
            </Row>
        )
    }
}

const List = connect(mapStatetoContainerProps,mapDispatchtoContainerProps)(List1);
export default List;