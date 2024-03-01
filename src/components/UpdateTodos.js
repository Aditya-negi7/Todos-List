import React, {useState} from 'react'

export const UpdateTodos = ({updateTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        updateTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="AddTodo">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
