import React,{ Component } from 'react';
import './index.css';
import Item from '../Item/index';
import { Row,Col} from "antd";

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let item_list = this.props.data.map(item =>
            <Item key={item.id} complete={item.complete} content={item.content}/>
        );
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