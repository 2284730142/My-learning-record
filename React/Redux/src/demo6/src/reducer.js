import {combineReducers} from 'redux';
import * as Action from './action';
import List from './ListData';

// 相当于逻辑处理，把你从action带过来的数据进行处理之后返回给redux，redux会通过react-redux把处理过的数据交给界面渲染

function adList(state = {list: List, searchList: [], isSearch: false}, action) {
    switch (action.type) {
        case Action.INIT_ITEM:
            return Object.assign({}, state, {
                isSearch: false,
                list: action.data
            });
        case Action.ADD_ITEM:
            const list = state.list;
            list.push(action.item);
            return Object.assign({}, state, {
                isSearch: false,
                list: list
            });
        case Action.DEL_ITEM:
            return Object.assign({}, state, {
                isSearch: false,
                list: state.list.filter((item) => {
                    return item.id !== action.id;
                })
            });
        case Action.SEARCH_ITEM:
            return Object.assign({}, state, {
                isSearch: true,
                searchList: state.list.filter((item) => {
                    if (action.search === item.id) {
                        return true;
                    } else if (item.title.indexOf(action.search) > -1) {
                        return true;
                    } else if (item.context.indexOf(action.search) > -1) {
                        return true;
                    }
                    return false;
                })
            });
        default:
            return state;
    }
}

const AppReducer = combineReducers({adList});
export default AppReducer;