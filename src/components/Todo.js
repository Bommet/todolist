import React, { useState, useEffect } from 'react';

import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [filter, setFilter] = useState('all');

	const filterTodos = () => {
		switch (filter) {
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => !todo.completed));
				break;
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	const addTodo = newTodo => setTodos([...todos, newTodo]);

	const getLocalTodos = () => {
		const localTodos = localStorage.getItem('todos');
		if (!localTodos) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			setTodos(JSON.parse(localTodos));
		}
	};

	const saveLocalTodos = () => localStorage.setItem('todos', JSON.stringify(todos));

	useEffect(getLocalTodos, []);
	useEffect(filterTodos, [filter, todos]);
	useEffect(saveLocalTodos, [filter, todos]);

	return (
		<div className="App">
			<header>
				<h1>Ed's Todo List</h1>
			</header>
			<Form addTodo={addTodo} setFilter={setFilter} />
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
};

export default Todo;
