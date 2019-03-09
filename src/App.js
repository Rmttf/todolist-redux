import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import List from './components/List/';
import Editor from './components/Editor/';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <List/>
                <Editor/>
            </div>
        );
    }
}

export default App;
