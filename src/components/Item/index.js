import React,{ Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
import './index.css';
import { AppContext } from "../../App";

class Item extends Component {
    constructor(props){
        super(props);
    };

    render() {
        const left_class = this.props.complete ? 'finished' : '';
        return (
            <AppContext.Consumer>
                {
                    data => (
                        <li>
                            <Row type="flex" justify="center" align="middle">
                                <Col span={12} className="left">
                                    <Checkbox className={left_class} checked={this.props.complete} onChange={data.changeComplete.bind(this,this.props.id)}>{this.props.content}</Checkbox>
                                </Col>
                                <Col span={12} className="right">
                                    <Button type="danger" onClick={data.deleteDate.bind(this,this.props.id)}>删除</Button>
                                </Col>
                            </Row>
                        </li>
                    )
                }
            </AppContext.Consumer>
        )
    }
};

export default Item;