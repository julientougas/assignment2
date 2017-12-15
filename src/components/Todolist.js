/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
/*eslint-enable no-unused-vars*/

class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} />
            );
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList
    };
};

export default connect(mapStateToProps)(Todolist);