export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const ADD_TODO_CHANGED = "ADD_TODO_CHANGED";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO";

export function toggleStatus(statusToggle){
    return {
        type: TOGGLE_STATUS,
        statusToggle: statusToggle
    };
}

export function addTodoChanged(newTodoText){
    return {
        type: ADD_TODO_CHANGED,
        newTodoText: newTodoText
    };
}

export function saveNewTodo(){
    return {
        type: SAVE_NEW_TODO
    };
}