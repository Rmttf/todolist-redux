import React,{ Component } from 'react';
import './index.css';
import Item from '../Item/index';
import { Row,Col} from "antd";

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let item_list = <li>{this.props.data}</li>,
            items = this.props.data;
        if ( typeof items[0] == 'object') {
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

export default List;