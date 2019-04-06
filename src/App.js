import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import List from './components/List/';
import Editor from './components/Editor/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0
        };
        // this.changeState = this.changeState.bind(this);
        // this.deleteDate = this.deleteDate.bind(this);
        // this.changeComplete = this.changeComplete.bind(this);
        // this.sortByState = this.sortByState.bind(this);
    }

    // changeState(input) {
    //     if (input && input.current.state.value) {
    //         let new_data = this.state.data,
    //             length = this.state.length + 1;
    //
    //         new_data.unshift({
    //             "id": `${length}`,
    //             "content": input.current.state.value,
    //             "complete": false
    //         });
    //
    //         this.setState({length: length});
    //         this.sortByState(new_data);
    //         input.current.state.value = '';
    //         input.current.focus();
    //     }
    // }

    // deleteDate(id) {
    //     if (!id){
    //         return;
    //     }
    //
    //     let new_data = this.state.data;
    //     new_data = new_data.filter(item => item.id !== id);
    //     this.sortByState(new_data);
    // }

    // changeComplete(id) {
    //     if (!id){
    //         return ;
    //     }
    //
    //     let new_data = this.state.data;
    //     new_data.find(function (d) {
    //         if (d.id === id) {
    //             let new_d = d;
    //             d.complete = d.complete ? false : true;
    //             return new_d;
    //         }
    //     });
    //
    //     this.sortByState(new_data);
    // }

    // sortByState(state) {
    //     let unfinished = [],
    //         finished = [];
    //
    //     state.forEach(function (d) {
    //         if (d.complete){
    //             finished.push((d));
    //         } else {
    //             unfinished.push(d);
    //         }
    //     });
    //
    //     // finished.sort(function (a,b) {
    //     //     return a.id - b.id;
    //     // });
    //     // unfinished.sort(function (a,b) {
    //     //     return b.id - a.id;
    //     // });
    //
    //     state = unfinished.concat(finished);
    //     this.setState({data: state});
    // }

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
