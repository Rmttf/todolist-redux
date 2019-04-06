import React,{ Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
import './index.css';

import { mapStatetoContainerProps,mapDispatchtoContainerProps } from "../../reducer/reducer";
import { connect } from "react-redux";
import _ from "lodash";

class Item1 extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    };

    handleDelete(id){
        if (id){
            let new_data = _.clone(this.props.data);
            new_data = new_data.filter(item => item.id !== id);

            this.props.onDelete(new_data);
        }
    }

    handleComplete(id) {
        if (id){
            let new_data = _.clone(this.props.data);
            new_data.find(function (d) {
                if (d.id === id) {
                    let new_d = d;
                    d.complete = d.complete ? false : true;
                    return new_d;
                }
            });

            this.props.onComplete(new_data);
        }
    }

    render() {
        const left_class = this.props.complete ? 'finished' : '';
        return (
                <li>
                    <Row type="flex" justify="center" align="middle">
                        <Col span={12} className="left">
                            <Checkbox className={left_class} checked={this.props.complete} onChange={this.handleComplete.bind(this,this.props.id)} >{this.props.content}</Checkbox>
                        </Col>
                        <Col span={12} className="right">
                            <Button type="danger" onClick={this.handleDelete.bind(this,this.props.id)}>删除</Button>
                        </Col>
                    </Row>
                </li>
        )
    }
};

const Item = connect(mapStatetoContainerProps,mapDispatchtoContainerProps)(Item1);

export default Item;