import React,{ Component } from 'react';
import './index.css';

class Editor extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>保存</button>
            </div>
        )
    }
}

export default Editor