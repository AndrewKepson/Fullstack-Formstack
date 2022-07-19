import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { userSelector } from '../../features/auth'
import { useGetDocumentsQuery } from '../../services/documents'
import classes from './Documents.module.css'

const Documents = () => {
  const { user, isAuthenticated } = useSelector(userSelector)
  const { data: documents } = useGetDocumentsQuery()

  if (documents) console.log(documents[0])

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
          <li key={doc.id} className={classes.document}>
            <Link to={`/documents/${doc.id}`} className={classes.documentLink}>
              {doc.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Documents
