import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetFormSubmissionsQuery } from '../../services/formstack'
import { userSelector } from '../../features/auth'

import classes from './Submissions.module.css'
import BeatLoader from 'react-spinners/BeatLoader'

const Submissions = () => {
  const { id } = useParams()
  const {
    user: { token }
  } = useSelector(userSelector)
  const { data, isLoading } = useGetFormSubmissionsQuery({ id, token })

  if (isLoading) return <BeatLoader />

  return (
    <section>
      <h1>My Submissions for Form.Name</h1>
      {data?.submissions?.length > 0 ? (
        data?.submissions?.map(submission => (
          <div key={submission.id}>
            {submission.timestamp}
            {/* pass google map with exact location */}
          </div>
        ))
      ) : (
        <span className={classes.noSubmissions}>
          This Form has not yet received any submissions.
        </span>
      )}
    </section>
  )
}

export default Submissions
