import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Master Components', completed: true },
    { id: 3, text: 'Build a Todo App', completed: false },
  ]);

  const [nextId, setNextId] = useState(4);

  const addTodo = (text) => {
    const newTodo = {
      id: nextId,
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-app">
      <h1>📝 My Todo List</h1>
      <p style={{ color: '#999', marginBottom: '1rem' }}>
        {completedCount} of {totalCount} tasks completed
      </p>
      <TodoForm onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default TodoApp;
