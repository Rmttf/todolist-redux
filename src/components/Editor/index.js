import React,{ Component } from 'react';
import './index.css';
import { Button,Input,Row,Col } from "antd";
import { AppContext } from "../../App";

class Editor extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }

    render() {
        return (
            <AppContext.Consumer>
                {
                    data => (
                        <div>
                            <Row type="flex" justify="center" align="middle">
                                <Col span={10}>
                                    <Input ref={this.input} className="Editor-input" type="text" placeholder="请输入..."/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="primary" onClick={data.changeState.bind(this,this.input)}>保存</Button>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </AppContext.Consumer>
        )
    }
}

export default Editor