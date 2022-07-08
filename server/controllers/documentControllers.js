import axios from 'axios'

import constants from '../constants.js'
const {
  documentsApi: { key, secret },
} = constants

export const getAllDocuments = async endpoint => {
  try {
    const result = await axios.get(endpoint, {
      auth: { username: key, password: secret },
    })

    return result.data
  } catch (e) {
    throw new Error(e)
  }
}

export const getDocument = async (endpoint, docId) => {
  try {
    const result = await axios.get(`${endpoint}/${docId}`, {
      auth: { username: key, password: secret },
    })

    return result.data
  } catch (e) {
    throw new Error(e)
  }
}

export const mergeDocument = async (endpoint, docId, docKey, mergeData) => {
  try {
    const result = await axios.post(`${endpoint}/${docId}/${docKey}?test=1`, {
      auth: { username: key, password: secret },
      ...mergeData,
    })

    return result.data
  } catch (e) {
    throw new Error(e)
  }
}

export const deleteDocument = async (endpoint, docId) => {
  try {
    const result = await axios.delete(`${endpoint}/${docId}`, {
      auth: { username: key, password: secret },
    })

    return result.data
  } catch (e) {
    throw new Error(e)
  }
}
