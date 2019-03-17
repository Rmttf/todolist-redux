import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import List from './components/List/';
import Editor from './components/Editor/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": "1",
                    "content": "做一个TodoList",
                    "complete": false
                }, {
                    "id": "2",
                    "content": "学ES6",
                    "complete": true
                }
            ]
        };
        this.changeState = this.changeState.bind(this);
        this.deleteDate = this.deleteDate.bind(this);
        this.changeComplete = this.changeComplete.bind(this);
    }

    changeState(message) {
        if (!message) {
            return;
        }

        let new_data = this.state.data,
            length = this.state.data.length + 1;

        new_data = new_data.concat({
            "id": `${length}`,
            "content": message,
            "complete": false
        });

        this.setState({
                data: new_data
            }
        );

        console.log(this.state.data);
    }

    deleteDate(id) {
        if (!id){
            return;
        }

        let new_data = this.state.data;
        new_data = new_data.filter(item => item.id !== id);
        this.setState({data:new_data});
    }

    changeComplete(id) {
        if (!id){
            return ;
        }

        let new_data = this.state.data;
        new_data[id-1].complete = new_data[id-1].complete ? false : true;
        this.setState({data:new_data});
    }

    render() {
        return (
            <div className="container">
                    <Header/>
                    <List data={this.state.data} delete={this.deleteDate} complete={this.changeComplete}/>
                    <Editor changeState={this.changeState}/>
            </div>
        );
    }
}

export default App;
