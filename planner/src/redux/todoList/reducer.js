import {GET_TODO, 
    GET_TODO_SUCCESS, 
    GET_TODO_FAIL, 
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL, 
    CLEAR_TODO, 
    TOGGLE_COMPLETED
    } from './actions';

    const initialState = {
        id: '',
        todo_lists: [],
        completed: false,
        isLoading: false,
        isAdding: false,
        error: null
    }

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODO:
            return {
                ...state,
                todo_lists: [],
                id:'',
                completed: false,
                isLoading: true,
                error: null
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                todo_lists: action.payload,
                id: '',
                completed: false
            }
        case GET_TODO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_TODO:
            let newItem = {
                todo_lists: action.payload,
                completed: false,
            };
            return {
                ...state,
                todo_lists: [...state.state.todo_lists, newItem]
            };
        case ADD_TODO_SUCCESS:
             return {
                ...state,
                error: null,
                isAdding: false,
                todo_lists: action.payload,
                id: ''
            }
        case ADD_TODO_FAIL:
             return {
                 ...state,
                error: action.payload,
                isAdding: false,
            }

        case TOGGLE_COMPLETED:
            let updatedTodos = state.todo_lists.task.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }else {
                    return item;
                }
            });
                return {
                    ...state,
                    todo_lists: updatedTodos
                };
                
        case CLEAR_TODO:
            return {
                ...state,
                todo_list: state.todo_list.task.filter(item => !item.completed)
            };
            default:
                return state;        
    }
}
export default todoReducer;