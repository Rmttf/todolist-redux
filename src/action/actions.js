// action for add
export function addTodo(item) {
    return {
        type : 'add',
        item : item
    }
}

export function deleteTodo(all_item) {
    return {
        type : 'delete',
        all_item : all_item
    }
}

export function completeTodo(all_item) {
    return {
        type : 'complete',
        all_item : all_item
    }
}