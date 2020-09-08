import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ filteredTodos, todos, setTodos }) => {
	const handleDelete = todoId => setTodos(todos.filter(todo => todo.id !== todoId));

	const handleComplete = todoId => {
		const clickedItem = todos.find(todo => todo.id === todoId);
		clickedItem.completed = !clickedItem.completed;
		setTodos([...todos]);
	};

	const todoItems = filteredTodos.map(todo => (
		<TodoItem
			text={todo.text}
			todoId={todo.id}
			completed={todo.completed}
			key={todo.id}
			onDelete={handleDelete}
			onComplete={handleComplete}
		/>
	));

	return (
		<div className="todo-container">
			<ul className="todo-list">{todoItems}</ul>
		</div>
	);
};

export default TodoList;
