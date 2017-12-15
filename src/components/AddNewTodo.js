/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import * as counterActions from "../actions";
import {connect} from "react-redux";
/*eslint-enable no-unused-vars*/

class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" id="todoInput" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addTodoChanged: state.addTodoChanged,
        saveNewTodo: state.saveNewTodo,
        addTodoValue: state.addTodoValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoChanged: (e) => dispatch(counterActions.addTodoChanged(e.target.value)),
        saveNewTodo: () => dispatch(counterActions.saveNewTodo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);