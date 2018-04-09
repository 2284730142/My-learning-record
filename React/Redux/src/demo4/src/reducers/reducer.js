import {combineReducers} from 'redux';
/*引入要合并的各种reducer*/
import CounterReducer from './CounterReducer';

const reducer = combineReducers({
    CounterReducer
});

export default reducer;