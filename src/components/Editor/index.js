import React,{ Component } from 'react';
import './index.css';
import { Button,Input,Row,Col } from "antd";

import { mapStatetoContainerProps,mapDispatchtoContainerProps } from "../../reducer/reducer";
import { connect } from "react-redux";

class Editor1 extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.handleSave = this.handleSave.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleSave() {
        let new_data;

        if (this.input && this.input.current.state.value) {
            let length = 1;

            if (this.props.data && this.props.data.length > 0){
                length = this.props.data.length + 1;
            }

            new_data = {
                "id": `${length}`,
                "content": this.input.current.state.value,
                "complete": false
            };

            this.input.current.state.value = '';
            this.input.current.focus();
        }

        if (new_data){
            this.props.onSave(new_data);
        }
    }

    handleKeyDown(e){
        if (e.keyCode && e.keyCode === 13) {
            this.handleSave();
        }
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={10}>
                        <Input ref={this.input} onKeyDown={this.handleKeyDown} className="Editor-input" type="text" placeholder="请输入..."/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="primary" onClick={this.handleSave}>保存</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Editor = connect(mapStatetoContainerProps,mapDispatchtoContainerProps)(Editor1);
export default Editor