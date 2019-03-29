import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import List from './components/List/';
import Editor from './components/Editor/';

const defaultValue = [];

export const AppContext = React.createContext(defaultValue);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: defaultValue,
            length: 0
        };
        this.changeState = this.changeState.bind(this);
        this.deleteDate = this.deleteDate.bind(this);
        this.changeComplete = this.changeComplete.bind(this);
        this.sortByState = this.sortByState.bind(this);
    }

    static getDerivedStateFromProps(nextProps,preState) {
        if (preState.data.length == 0) {
        }
        return null;
    }

    changeState(input) {
        if (input && input.current.state.value) {
            let new_data = this.state.data,
                length = this.state.length + 1;

            new_data.unshift({
                "id": `${length}`,
                "content": input.current.state.value,
                "complete": false
            });

            this.setState({length: length});
            this.sortByState(new_data);
            input.current.state.value = '';
            input.current.focus();
        }
    }

    deleteDate(id) {
        if (!id){
            return;
        }

        let new_data = this.state.data;
        new_data = new_data.filter(item => item.id !== id);
        this.sortByState(new_data);
    }

    changeComplete(id) {
        if (!id){
            return ;
        }

        let new_data = this.state.data;
        new_data.find(function (d) {
            if (d.id == id) {
                let new_d = d;
                d.complete = d.complete ? false : true;
                return new_d;
            }
        });

        this.sortByState(new_data);
    }

    sortByState(state) {
        let unfinished = [],
            finished = [];

        state.forEach(function (d) {
            if (d.complete){
                finished.push((d));
            } else {
                unfinished.push(d);
            }
        });

        // finished.sort(function (a,b) {
        //     return a.id - b.id;
        // });
        // unfinished.sort(function (a,b) {
        //     return b.id - a.id;
        // });

        state = unfinished.concat(finished);
        this.setState({data: state});
    }

    render() {
        let length = this.state.data.length,
            showList = <List data='还没有内容'/>;

        if (length > 0){
            showList = <List data={this.state.data}/>;
        }

        return (
            <AppContext.Provider value={{ data:this.state.data,changeState:this.changeState,deleteDate:this.deleteDate,changeComplete:this.changeComplete }}>
                <div className="container">
                    <Header/>
                    {showList}
                    <Editor/>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
