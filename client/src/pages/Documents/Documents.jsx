import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'
import { useGetDocumentsQuery } from '../../services/documents'
import classes from './Documents.module.css'

const Documents = () => {
  const { user, isAuthenticated } = useSelector(userSelector)
  const { data: documents } = useGetDocumentsQuery()

  if (!isAuthenticated)
    return (
      <div>
        <h1>Please Login to See Your Documents</h1>
      </div>
    )

  return (
    <section className={classes.documentsContainer}>
      <h1>My Documents</h1>
      <ul>
        {documents?.map(doc => (
          <li key={doc.id}>{doc.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Documents
