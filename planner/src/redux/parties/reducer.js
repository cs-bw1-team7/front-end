import {GET_PARTY, 
    GET_PARTY_SUCCESS, 
    GET_PARTY_FAIL, 
    ADD_PARTY,  
    ADD_PARTY_SUCCESS, 
    ADD_PARTY_FAIL,
    } from './actions';


const initialState = {
    
    parties: [],
    isLoading: false,
    isAdding: false,
    error: null,
    isDeleting: false

}

const partyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PARTY:
            return {
                ...state,
                parties: [],
                id: '',
                isLoading: true,
                error: null
            }
        case GET_PARTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                parties: action.payload,
                
            }
        case GET_PARTY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_PARTY:
            return {
                ...state,
                error: null,
                isAdding: true,
                
                
            }
        case ADD_PARTY_SUCCESS:
            return {
                ...state,
                error: null,
                isAdding: false,
                parties: [...state.parties, action.payload]
            }
        case ADD_PARTY_FAIL:
            return {
                ...state,
                error: action.payload,
                isAdding: false,
            }

        // case DELETE_PARTY:
        //     return {
        //         ...state,
        //         error: null,
        //         isDeleting: true,
                                                
        //  }
        // case DELETE_PARTY_SUCCESS:
        //     return {
        //         ...state,
        //         error: null,
        //         isDeleting: false,
        //         parties: [...state.parties]
        //             }
        // case DELETE_PARTY_FAIL:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         isDeleting: false,
        //             }
        default:
            return state
    }
}
export default partyReducer;