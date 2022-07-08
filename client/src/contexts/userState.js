import React, { useReducer } from 'react'
import axios from 'axios'

import { UserContext, UserReducer } from '../contexts'
import {
  GET_USER,
  SET_DOCS,
  SET_CURRENT,
  UPDATE_CURRENT,
  DELETE_CURRENT,
  CLEAR_CURRENT,
  DOCUMENTS_ERROR,
} from './types'

export const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const initialState = {
    user: null,
    documents: null,
    error: null,
  }

  const getUser = async () => {
    try {
      const response = await axios.get(`/documents`)

      dispatch({ type: GET_USER, payload: response.data })
    } catch (e) {
      dispatch({ type: DOCUMENTS_ERROR, payload: e.response.msg })
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        documents: state.documents,
        error: state.error,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
