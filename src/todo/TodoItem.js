import './'
import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div>
      <ul class="list-group mt-3 ">
        <li class="list-group-item d-flex justify-content-between mx-5">
          <input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
          <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}><span><i class="bi bi-trash text-danger"></i></span></button>
        </li>
      </ul>
    </div>
  );
}

export default TodoItem;
