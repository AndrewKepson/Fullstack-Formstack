import React, { useState } from 'react'
import axios from 'axios'

import { Grid, TextField, Button, Typography } from '@mui/material'

const FormToDocument = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    jobTitle: '',
  })

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(data => ({ ...data, [name]: value }))
  }

  const createDocument = async data => {
    try {
      const documentDetails = await axios.get(
        `http://localhost:3001/documents/form-to-doc-test`
      )

      const document = await axios.post(
        `https://www.webmerge.me/merge/${documentDetails.data.id}/${documentDetails.data.key}?test=1`,
        { ...data }
      )

      setFormData({
        name: '',
        email: '',
        address: '',
        jobTitle: '',
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Grid container spacing={2} style={{ padding: '0.5rem' }}>
      <Typography variant="h1" gutterBottom>
        Form to Documents Merge
      </Typography>
      <Typography variant="body1">
        Some users need to generate Documents frequently based on user data, but
        need to maintain a specific setup or styling library on the front end.
        This page is an example of using a form built on the front end with MUI
        (Material UI) that immediately sends the user's data to be merged into a
        Document.
      </Typography>
      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          onChange={handleChange}
          name="name"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          onChange={handleChange}
          name="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          onChange={handleChange}
          name="address"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Job Title"
          variant="outlined"
          onChange={handleChange}
          name="jobTitle"
        />
      </Grid>
      <Grid item xs={12} flex flexDirection="row" justifyContent="center">
        <Button
          type="button"
          variant="contained"
          onClick={() => createDocument(formData)}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default FormToDocument
