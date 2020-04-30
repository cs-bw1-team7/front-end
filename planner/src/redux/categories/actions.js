import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';

export const rxGetCategory = () => dispatch=> {
    dispatch({type: GET_CATEGORY})
    axiosWithAuth()
        .get('/categories')
        .then(res=> {
            return dispatch({type: GET_CATEGORY_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: GET_CATEGORY_FAIL, payload: err.response}))
}


export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'ADD_CATEGORY_FAIL';

export const rxAddCategory = category => dispatch => {
    dispatch({type: ADD_CATEGORY, payload: "New category being added..."});
    axiosWithAuth()
        .post('/categories', category)
        .then(res => dispatch({type: ADD_CATEGORY_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_CATEGORY_FAIL, payload: err.response}))
}


export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';