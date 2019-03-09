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
        }
    }
    render() {
        return (
            <div className="container">
                    <Header/>
                    <List data={this.state.data}/>
                    <Editor/>
            </div>
        );
    }
}

export default App;
