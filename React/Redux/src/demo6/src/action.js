export const INIT_ITEM = 'INIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';
export const SEARCH_ITEM = 'SEARCH_ITEM';

// 你在做逻辑处理之前的行为指向并传递过去逻辑处理所需要的内容

export function initItem(data) {
    return {
        type: INIT_ITEM,
        data: data
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item: item
    }
}

export function delItem(id) {
    return {
        type: DEL_ITEM,
        id: id
    }
}

export function searchItem(search) {
    return {
        type: SEARCH_ITEM,
        search: search
    }
}