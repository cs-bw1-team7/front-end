import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const GET_PICS = 'GET_PICS';
export const GET_PICS_SUCCESS = 'GET_PICS_SUCCESS';
export const GET_PICS_FAIL = 'GET_PICS_FAIL';

export const rxGetPics = () => dispatch=> {
    dispatch({type: GET_PICS})
    axiosWithAuth()
        .get('/parties/:id/pictures')
        .then(res=> {
            dispatch({type: GET_PICS_SUCCESS, payload: res.data})
        })

        .catch(err => dispatch({type: GET_PICS_FAIL, payload: err.response}));
}


export const ADD_PIC = 'ADD_PIC';
export const ADD_PIC_SUCCESS = 'ADD_PIC_SUCCESS';
export const ADD_PIC_FAIL = 'ADD_PIC_FAIL';

export const rxAddPics = pics => dispatch => {
    dispatch({type: ADD_PIC, payload: "New picture being added..."});
    axiosWithAuth()
        .post('/parties/:id/pictures', pics)
        .then(res => dispatch({type: ADD_PIC_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ADD_PIC_FAIL, payload: err.response}))
}


export const EDIT_PIC = 'EDIT_PIC';
export const DELETE_PIC = 'DELETE_PIC';
