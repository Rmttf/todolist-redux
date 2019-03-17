import React,{ Component } from 'react';
import './index.css';
import { Button,Input,Row,Col } from "antd";

class Editor extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.props.changeState(this.input.current.state.value);
        this.input.current.state.value = '';
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={10}>
                        <Input ref={this.input} className="Editor-input" type="text" placeholder="请输入..."/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="primary" onClick={this.changeState}>保存</Button>
                    </Col>
                </Row>
            </div>


        )
    }
}

export default Editor