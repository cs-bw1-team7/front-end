import {GET_ITEM, 
    GET_ITEM_SUCCESS, 
    GET_ITEM_FAIL, 
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL, 
    CLEAR_ITEM, 
    TOGGLE_PURCHASED
    } from './actions';

    const initialState = {
        id: '',
        item: [],
        completed: false,
        isLoading: false,
        isAdding: false,
        error: null
    }

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEM:
            return {
                ...state,
                todo_lists: [],
                id:'',
                completed: false,
                isLoading: true,
                error: null
            }
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                item: action.payload,
                id: '',
                completed: false
            }
        case GET_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_ITEM:
            let newItem = {
                item: action.payload,
                completed: false,
            };
            return {
                ...state,
                item: [...state.state.todo_lists, newItem]
            };
        case ADD_ITEM_SUCCESS:
             return {
                ...state,
                error: null,
                isAdding: false,
                item: action.payload,
                id: ''
            }
        case ADD_ITEM_FAIL:
             return {
                 ...state,
                error: action.payload,
                isAdding: false,
            }

        case TOGGLE_PURCHASED:
            let updatedItems = state.item.task.map(items => {
                if(items.id === action.payload) {
                    return {
                        ...items,
                        purchased: !items.purchased
                    };
                }else {
                    return items;
                }
            });
                return {
                    ...state,
                    items: updatedItems
                };
                
        case CLEAR_ITEM:
            return {
                ...state,
                items: state.item.task.filter(items => !items.completed)
            };
            default:
                return state;        
    }
}
export default shopReducer;
