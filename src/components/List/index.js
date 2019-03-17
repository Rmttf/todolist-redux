import React,{ Component } from 'react';
import './index.css';
import Item from '../Item/index';
import { Row,Col} from "antd";

class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // let item_list = this.props.data.map(item =>
        //     <Item key={item.id} id={item.id} complete={item.complete} content={item.content} delete={this.props.deleteDate}/>
        // );
        let item_list = [],
            items = this.props.data;
        for (let i=0;i<items.length;i++){
            item_list.push(<Item key={items[i].id} id={items[i].id} complete={items[i].complete} content={items[i].content} delete={this.props.delete} changeComplete={this.props.complete}/>)
        }

        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={10}>
                    <ul>
                        {item_list}
                    </ul>
                </Col>
            </Row>
        )
    }
}

export default List;