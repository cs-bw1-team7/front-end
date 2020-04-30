import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_TODO = 'GET_TODO'; 
export const GET_TODO_SUCCESS =  'GET_TODO_SUCCESS';
export const GET_TODO_FAIL = 'GET_TODO_FAIL';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const CLEAR_TODO =  'CLEAR_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const rxGetTodo = () => dispatch=> {
    dispatch({type: GET_TODO})
    axiosWithAuth()
        .get('/parties/:id/todoList')
        .then(res=> {
            return dispatch({type: GET_TODO_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: GET_TODO_FAIL, payload: err.response}))
}


export const rxAddTodo = todo => dispatch => {
    dispatch({type: ADD_TODO, payload: "New todo being added..."});
    axiosWithAuth()
        .post('/parties/:id/todoList', todo)
        .then(res => dispatch({type: ADD_TODO_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_TODO_FAIL, payload: err.response}))
}
