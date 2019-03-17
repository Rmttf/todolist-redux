import React,{ Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
import './index.css';

class Item extends Component {
    constructor(props){
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.changeComplete = this.changeComplete.bind(this);
    };

    deleteData(id) {
        this.props.delete(id);
    }

    changeComplete(id) {
        this.props.changeComplete(id);
    }

    render() {
        const left_class = this.props.complete ? 'left-finished' : 'left';
        return (
            <li>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12} className={left_class}>
                        <Checkbox checked={this.props.complete} onChange={this.changeComplete.bind(this,this.props.id)}/> {this.props.content}
                    </Col>
                    <Col span={12} className="right">
                        <Button type="danger" onClick={this.deleteData.bind(this, this.props.id)}>删除</Button>
                    </Col>
                </Row>
            </li>
        )
    }
};

export default Item;