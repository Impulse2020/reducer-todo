import React from 'react';

export const initialState = {
    todo: 'learn about reducers',
    done: false,
    id: 3892987589
}
export const Reducer = (state, action) => {
    switch (action.type) {
        case "complete":
            return {
                ...state,
                done: !state.done
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