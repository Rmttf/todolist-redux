import React,{ Component } from 'react';
import './index.css';
import {Row, Col, Checkbox, Button} from 'antd';

class List extends Component {
    render() {
        return (
            <ul>
                <li className="list-group-item">
                    <Row>
                        <Col span={12}>
                            <Checkbox /> {'lalala'}
                        </Col>
                        <Col span={12}>
                            <Button type="danger" className="pull-right" >删除</Button>
                        </Col>
                    </Row>
                </li>
            </ul>
        )
    }
}

export default List;