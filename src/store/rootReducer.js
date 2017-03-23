import filterObject from '../domain/filterObject'
import categorizeItems from '../domain/categorizer'
import { LIST_SCREEN, ADD_SCREEN } from '../domain/screens'
import { SHOW_LIST, SHOW_ADD, SET_ITEM, SET_ITEM_COMPLETION } from './actions'

const initialState = { 
  screen: LIST_SCREEN,
  items: {},
  itemCompletionStates: {},
  categorizedItems: {}
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_LIST:
      return Object.assign({}, state, { screen: LIST_SCREEN })
      
    case SHOW_ADD:
      return Object.assign({}, state, { screen: ADD_SCREEN })

    case SET_ITEM:
      let newItems = Object.assign({}, state.items, { [action.itemId]: action.item })
      let filteredItems = filterObject(newItems, i => i != null)
      return Object.assign({}, state, { 
        items: filteredItems,
        categorizedItems: categorizeItems(filteredItems)
      })

    case SET_ITEM_COMPLETION:
      let newStates = Object.assign({}, state.itemCompletionStates, { [action.itemId]: action.completed })
      let filteredStates = filterObject(newStates, i => i != null)
      return Object.assign({}, state, { 
        itemCompletionStates: filteredStates
      })

    default:
      return state
  }
}