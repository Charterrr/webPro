
import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    <div className="container">
      <h1 className="mt-5">Simple TodoApp</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group mt-4 mb-4">
          <input type="text" className="form-control" value={text} onChange={(event) => setText(event.target.value)} />
          <button class="btn btn-info" type="submit" id="submitbtn"><span>&nbsp;<i class="bi bi-plus"></i></span>&nbsp;&nbsp;</button>
        </div>
        
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
      <hr/>
    </div>
  );
}

export default Todos;
