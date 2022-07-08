import express from 'express'
import axios from 'axios'

import constants from '../constants.js'

const router = express.Router()
const {
  formstackApi: { baseUrl }
} = constants

router
  .get('/:token', async (req, res) => {
    const { token } = req.params

    console.log(token)
    console.log(req.params)

    try {
      const result = await axios.get(`${baseUrl}/form`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      res.send(result.data)
    } catch (e) {
      // console.error(e)
      res.send(e)
    }
  })
  .get('/:id/:token', async (req, res) => {
    const { id, token } = req.params

    try {
      const result = await axios.get(`${baseUrl}/form/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      res.json(result.data)
    } catch (e) {
      res.send(e)
    }
  })
  .get('/:id/submissions/:token', async (req, res) => {
    const { id, token } = req.params

    try {
      const result = await axios.get(`${baseUrl}/form/${id}/submission`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      res.json(result.data)
    } catch (e) {
      console.error(e)
      res.status(500).send(e)
    }
  })

export default router
