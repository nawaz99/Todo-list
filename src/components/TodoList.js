import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({items, clear, handleDelete ,handleEdit}) {
    return (
      <ul className='list-group my-5'>
          <h3 className='text-capitalize text-center'>
              todo list
          </h3>
          {items.map(item => {
             return <TodoItem key={item.id} 
             title={item.title} 
             handleDelete={() => handleDelete(item.id)}
             handleEdit={() => handleEdit(item.id)}/>
          })}
          
          <button type='button' onClick={clear}
          className='btn btn-danger btn-block text-capitalize mt-5'>
              clear list
          </button>
      </ul>
    )
}
