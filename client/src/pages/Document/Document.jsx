import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { userSelector } from '../../features/auth'
import { useGetDocumentQuery } from '../../services/documents'

const Document = () => {
  const { user } = useSelector(userSelector)
  const { id } = useParams()
  const { data: document } = useGetDocumentQuery(id)

  return (
    <div>
      <h1>{document?.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: document?.html }} />
    </div>
  )
}

export default Document
