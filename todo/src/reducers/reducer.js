import React from 'react';

export const initialState = {
   list:[{
    todo: 'learn about reducers',
    done: false,
    id: 3892987589
   }]
}
export const Reducer = (state, action) => {
    switch (action.type) {
        case "Add_Task":
            return{
            ...state,
           list:[...state.list,{todo: action.payload, done:false, id:Date()} ]
        }
        case "complete":
            return {
                ...state,
                done: true
            }
        case "incomplete":
            return {
                ...state,
                done: false
            }
         default:
             return state;
    }

}