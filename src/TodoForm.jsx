import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim() === '') {
      alert('Please enter a todo item!');
      return;
    }

    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
