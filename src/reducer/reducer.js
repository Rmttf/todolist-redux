import _ from 'lodash';
import {addTodo, completeTodo, deleteTodo} from "../action/actions";

let defaultValue = {
    data: getFromLocal() ? getFromLocal() : null
};

function saveToLocal(data) {
    localStorage.setItem('todo_list',JSON.stringify(data));
}

function getFromLocal() {
    let str = localStorage.getItem('todo_list');
    return JSON.parse(str);
}

// 排序并保存本地
function sortByState(state) {
    if (!state) {
        return null;
    }

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

    let data = unfinished.concat(finished);
    saveToLocal(data);
    return data;
}

// reducer
export function contentReducer (state = defaultValue,action) {
    switch (action.type) {
        case 'add':
            let new_state = _.clone(state);
            if (action.item && new_state.data) {
                new_state.data = new_state.data.concat([action.item]);
            } else {
                new_state.data = [action.item];
            }
            return new_state;
        case 'delete':
            if (action.all_item){
                return {
                    data : action.all_item
                };
            }
            break;
        case 'complete':
            if (action.all_item){
                return {
                    data : action.all_item
                }
            }
            break;
        case 'new add':
            let new_sstate = _.clone(state);
            if (action.item && new_sstate.data) {
                new_sstate.data = new_sstate.data.concat([action.item]);
            } else {
                new_sstate.data = [action.item];
            }
            return new_sstate;
        default:
            return defaultValue;
    }
}

// redux state to component props
export function mapStatetoContainerProps(state) {
    return {
        data : sortByState(state.data)
    }
}

export function mapDispatchtoContainerProps(dispatch) {
    return {
        onSave : (item) => dispatch(addTodo(item)),
        onDelete : (all_item) => dispatch(deleteTodo(all_item)),
        onComplete : (all_item) => dispatch(completeTodo(all_item))
    }
}