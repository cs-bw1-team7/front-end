import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_ITEM = 'GET_ITEM'; 
export const GET_ITEM_SUCCESS =  'GET_ITEM_SUCCESS';
export const GET_ITEM_FAIL = 'GET_ITEM_FAIL';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';
export const CLEAR_ITEM =  'CLEAR_ITEM';
export const TOGGLE_PURCHASED = 'TOGGLE_PURCHASED';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const rxGetItem = () => dispatch=> {
    dispatch({type: GET_ITEM})
    axiosWithAuth()
        .get('parties/:id/shoppingList')
        .then(res=> {
            return dispatch({type: GET_ITEM_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: GET_ITEM_FAIL, payload: err.response}))
}


export const rxAddItem = items => dispatch => {
    dispatch({type: ADD_ITEM, payload: "New item being added..."});
    axiosWithAuth()
        .post('/parties/:id/shoppingList', items)
        .then(res => dispatch({type: ADD_ITEM_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_ITEM_FAIL, payload: err.response}))
}
