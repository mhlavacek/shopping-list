export const LIST_SCREEN = 'LIST_SCREEN'
export const ADD_SCREEN = 'ADD_SCREEN'

export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_ADD = 'SHOW_ADD'
export const ADD_ITEMS = 'ADD_ITEMS'
export const CLEAR_ITEMS = 'CLEAR_ITEMS'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const SYNC_ITEMS = 'SYNC_ITEMS'
export const SYNC_COMPLETION_STATES = 'SYNC_COMPLETION_STATES'

export function showList() {
    return { type: SHOW_LIST }
}

export function showAdd() {
    return { type: SHOW_ADD }
}

export function addItems(newItems) {
    return { type: ADD_ITEMS, newItems: newItems }
}

export function clearItems() {
    return { type: CLEAR_ITEMS }
}

export function toggleItem(itemId) {
    return { type: TOGGLE_ITEM, itemId: itemId }
}

export function syncItems(items) {
    return { type: SYNC_ITEMS, items: items }
}

export function syncCompletionStates(itemCompletionStates) {
    return { type: SYNC_COMPLETION_STATES, itemCompletionStates: itemCompletionStates }
}
