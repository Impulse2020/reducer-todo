import React from 'react';

 const Todo = props => {
    console.log(props.todo)
    return(
        <div
        onClick = {props.complete}
        className={props.done ? 'Done' : 'notdone'}
        >
            <p>{props.todo}</p>
        </div>


    )

}

export default Todo;