import { useState } from 'react'
import axios from 'axios'

import classes from './ClientFetch.module.css'

const ClientFetch = () => {
  const [documentsState, setDocumentsState] = useState(null)

  const getCredentials = async () => {
    try {
      const result = await fetch(
        `http://localhost:3001/authentication/documents-creds`
      )

      return result
    } catch (e) {
      console.error(e)
    }
  }

  const fetchDocuments = async e => {
    const credentialsResult = await getCredentials()
    const credentials = await credentialsResult.json()

    const result = await axios.get(`https://www.webmerge.me/api/documents`, {
      auth: { username: credentials.key, password: credentials.secret },
    })

    const documents = [...result.data]

    setDocumentsState(documents)
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <button type="button" onClick={fetchDocuments}>
        Fetch Documents (Client Side)
      </button>
      <div className={classes.documentsWrapper}>
        {documentsState !== null &&
          documentsState.map(doc => <Document key={doc.id} document={doc} />)}
      </div>
    </div>
  )
}

const Document = ({ document }) => (
  <div>
    <span>{document.name}</span>
  </div>
)

export default ClientFetch
