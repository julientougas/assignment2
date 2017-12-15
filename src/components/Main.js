/*eslint-disable no-unused-vars*/
import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
/*eslint-enable no-unused-vars*/

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist />
                <AddNewTodo addTodoValue={this.props.addTodoValue}/>
            </div>
        );
    }
}