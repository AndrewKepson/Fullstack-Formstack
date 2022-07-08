import {
  GET_USER,
  SET_DOCS,
  SET_CURRENT,
  UPDATE_CURRENT,
  DELETE_CURRENT,
  CLEAR_CURRENT,
} from './types'

export const UserReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        documents: action.payload,
        loading: false,
      }
    case UPDATE_CURRENT:
      return {
        ...state,
        documents: state.documents.map(document =>
          document.id === action.payload.id ? action.payload : document
        ),
      }
    default:
      return state
  }
}
