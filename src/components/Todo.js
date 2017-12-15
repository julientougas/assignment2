/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import * as counterActions from "../actions";
import {connect} from "react-redux";
/*eslint-enable no-unused-vars*/

class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.toggleStatus}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toggleStatus: state.toggleStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus: (e) => dispatch(counterActions.toggleStatus(e.target.closest("li").id.split("-")[1]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);