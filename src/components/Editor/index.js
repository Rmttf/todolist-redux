import React,{ Component } from 'react';
import './index.css';
import { Button,Input,Row,Col } from "antd";

class Editor extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={10}>
                        <Input className="Editor-input" type="text" placeholder="请输入..."/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="primary">保存</Button>
                    </Col>
                </Row>
            </div>


        )
    }
}

export default Editor