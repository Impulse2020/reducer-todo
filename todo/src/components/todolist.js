import React from 'react';
import Todo from './todo';

const TodoList = props => {



return( 
    <div className="list">
        {props.list.map (todo => (<Todo complete={props.complete} done={todo.done} key={todo.id} todo={todo.todo} />))}
        <button> clear tasks </button>
    </div>
);




};

export default TodoList;