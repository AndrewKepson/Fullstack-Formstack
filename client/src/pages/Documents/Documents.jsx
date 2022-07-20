import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'
import { useGetDocumentsQuery } from '../../services/documents'

import * as Styled from './styles'

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
    <Styled.Documents>
      <h1>My Documents</h1>
      <ul>
        {documents?.map(doc => (
          <Styled.Document key={doc.id}>
            <Styled.DocumentLink to={`/documents/${doc.id}`}>
              {doc.name}
            </Styled.DocumentLink>
          </Styled.Document>
        ))}
      </ul>
    </Styled.Documents>
  )
}

export default Documents
