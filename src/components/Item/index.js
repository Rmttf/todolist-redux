import React,{ Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
import './index.css';

class Item extends Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <li>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12} className="left">
                        <Checkbox checked={this.props.complete}/> {this.props.content}
                    </Col>
                    <Col span={12} className="right">
                        <Button type="danger" >删除</Button>
                    </Col>
                </Row>
            </li>
        )
    }
};

export default Item;