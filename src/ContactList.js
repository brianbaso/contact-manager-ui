import React from 'react';
import "./HomepageStyle.scss";

class ContactList extends React.Component {
    constructor() {
        super();
        this.state =
        {
            contacts: [],
        };
    }

    render() {
        let bulletedTodos = this.state.todos.map((e, i) => {
            return (
                <li key={i}> {e} </li>
            );
        });

        return (
            <div>
                <input placeholder="Enter todo item" value={this.state.currentTodo}
                    onChange={this.onInputChange} />

                <button onClick={this.onClick}>Add</button>

                <br />
                {this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletedTodos}</ul>}
            </div>
        );
    }
}

export default ContactList;