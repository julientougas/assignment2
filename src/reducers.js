import {TOGGLE_STATUS, ADD_TODO_CHANGED, SAVE_NEW_TODO} from "./actions";

export default function mainApp(state, action){
    let newState = Object.assign({}, state);
    let todoList = newState.todoList.slice();
    let newTodoItem = {};
    const lastId = todoList[todoList.length - 1].id;
    switch (action.type) {
    case TOGGLE_STATUS:
        for (let i = 0; i < todoList.length; i++) {
            let todo = todoList[i];
            let id = action.statusToggle;
            if (todo.id == id) {
                todo.status = (todo.status) ? 0 : 1;
                break;
            }
        }
        newState = Object.assign({}, newState, {todoList});
        break;
    case ADD_TODO_CHANGED:
        newState = Object.assign({}, newState, {"addTodoValue": action.newTodoText});
        break;
    case SAVE_NEW_TODO:
        newTodoItem.id = lastId + 1;
        newTodoItem.key = lastId + 1;
        newTodoItem.text = newState.addTodoValue;
        newTodoItem.status = 0;
        todoList.push(newTodoItem);
        newState = Object.assign({}, newState, {todoList, "addTodoValue": ""});
        break;
    default:
        return state;
    }
    return newState;
}