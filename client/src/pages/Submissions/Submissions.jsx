import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetFormSubmissionsQuery } from '../../services/formstack'
import { userSelector } from '../../features/auth'

import classes from './Submissions.module.css'
import BeatLoader from 'react-spinners/BeatLoader'
import { Submission } from '../../components'

const Submissions = () => {
  const { id } = useParams()
  const {
    user: { token }
  } = useSelector(userSelector)
  const { data, isLoading } = useGetFormSubmissionsQuery({ id, token })

  if (isLoading) return <BeatLoader />

  console.log(data.submissions)

  return (
    <section>
      <h1>My Submissions for Form.Name</h1>
      <div className={classes.submissionsWrapper}>
        {data?.submissions?.length > 0 ? (
          data?.submissions?.map(submission => (
            <Submission key={submission.id} submission={submission} />
          ))
        ) : (
          <span className={classes.noSubmissions}>
            This Form has not yet received any submissions.
          </span>
        )}
      </div>
    </section>
  )
}

export default Submissions
