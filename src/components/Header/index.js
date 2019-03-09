import React, { Component } from 'react';
import './index.css';
import {Row, Col} from 'antd';

class Header extends Component {
    render() {
        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                    <h1 className="Header-head">
                        TodoList
                    </h1>
                </Col>
            </Row>
        );
    }
}

export default Header;