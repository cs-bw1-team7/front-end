import {combineReducers} from 'redux';
import partyReducer from './parties/reducer';
import picturesReducer from './pictures/reducers';
import categoryReducer from './categories/reducer';
import todoReducer from './todoList/reducer';
import shopReducer from './shopList/reducer';

export default combineReducers({
    partyReducer,
    picturesReducer,
    categoryReducer,
    todoReducer,
    shopReducer
})
