import {GET_CATEGORY, 
    GET_CATEGORY_SUCCESS, 
    GET_CATEGORY_FAIL, 
    ADD_CATEGORY,  
    ADD_CATEGORY_SUCCESS, 
    ADD_CATEGORY_FAIL} from './actions';

    // let nextCatID = 9;
const initialState = {
    category: '',
    id: 9,
    isLoading: false,
    isAdding: false,
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORY:
            return {
                ...state,
                category: '',
                isLoading: true,
                error: null
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                category: action.payload
            }
        case GET_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                error: null,
                isAdding: true,
                category: action.payload
            }
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                error: null,
                isAdding: false,
                category: action.payload
            }
        case ADD_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload,
                isAdding: false,
            }
        default:
            return state
    }
}
export default categoryReducer;