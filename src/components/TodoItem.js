import React from 'react';

const TodoItem = ({ text, todoId, completed, onDelete, onComplete }) => (
	<div className="todo">
		<li className={`todo-item ${completed && 'completed'}`}>{text}</li>
		<button onClick={() => onComplete(todoId)} className="complete-btn">
			<i className="fas fa-check"></i>
		</button>
		<button onClick={() => onDelete(todoId)} className="trash-btn">
			<i className="fas fa-trash"></i>
		</button>
	</div>
);

export default TodoItem;
