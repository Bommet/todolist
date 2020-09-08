import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inputText: '' };
	}
	handleInputTextChange(event) {
		this.setState({ inputText: event.target.value });
	}

	handleButtonClicked(event) {
		event.preventDefault();
		this.props.addTodo({ text: this.state.inputText, completed: false, id: (Math.random() * 1000).toFixed(0) });
		this.setState({ inputText: '' });
	}

	handleFilterChanged(event) {
		this.props.setFilter(event.target.value);
	}

	render() {
		return (
			<form>
				<input
					value={this.state.inputText}
					onChange={this.handleInputTextChange.bind(this)}
					type="text"
					className="todo-input"
				/>
				<button onClick={this.handleButtonClicked.bind(this)} className="todo-button" type="submit">
					<i className="fas fa-plus-square"></i>
				</button>
				<div className="select">
					<select onChange={this.handleFilterChanged.bind(this)} name="todos" className="filter-todo">
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</form>
		);
	}
}
