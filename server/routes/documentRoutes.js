import express from 'express'

import constants from '../constants.js'
import {
  deleteDocument,
  getAllDocuments,
  getDocument,
  mergeDocument,
} from '../controllers/documentControllers.js'

const router = express.Router()
const {
  documentsApi: { baseUrl, testId, testKey },
} = constants

router
  .get('/', async (req, res) => {
    try {
      const result = await getAllDocuments(baseUrl)

      const documents = [...result]

      res.status(200).send(documents)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .get(`/form-to-doc-test`, async (req, res) => {
    try {
      const data = {
        id: testId,
        key: testKey,
      }

      res.status(200).send(data)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .get(`/:id`, async (req, res) => {
    const { id } = req.params

    try {
      const result = await getDocument(baseUrl, id)

      res.status(200).send(result)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .post(`/:id/:key`, async (req, res) => {
    const { id, key } = req.params
    const { mergeData } = req.body

    try {
      const result = await mergeDocument(baseUrl, id, key, mergeData)

      res.status(200).send(result)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .delete(`/:id/:key`, async (req, res) => {
    const { id, key } = req.params

    try {
      const result = await deleteDocument(baseUrl, id)

      res.status(200).send(result)
    } catch (e) {
      res.status(400).send(e)
    }
  })

export default router
