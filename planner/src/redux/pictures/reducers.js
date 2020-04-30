import {GET_PICS, 
    GET_PICS_SUCCESS, 
    GET_PICS_FAIL, 
    ADD_PIC, 
    ADD_PIC_SUCCESS, 
    ADD_PIC_FAIL} from './actions';


const initialState = {
    pictures: [],
    isLoading: false,
    isAdding: false,
    error: null
}

const picturesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PICS:
            return {
                ...state,
                pictures: [],
                isLoading: true,
                error: null
            }
        case GET_PICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                pictures: action.payload
            }
        case GET_PICS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_PIC:
            return {
                ...state,
                error: null,
                isAdding: true,
                
            }
        case ADD_PIC_SUCCESS:
            return {
                ...state,
                error: null,
                isAdding: false,
                pictures: [...state.parties, action.payload]
            }
        case ADD_PIC_FAIL:
            return {
                ...state,
                error: action.payload,
                isAdding: false,
            }
        default:
            return state
    }
}
export default picturesReducer;