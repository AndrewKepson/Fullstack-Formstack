import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetFormSubmissionsQuery } from '../../services/formstack'
import { userSelector } from '../../features/auth'

import BeatLoader from 'react-spinners/BeatLoader'
import { Submission } from '../../components'

import * as Styled from './styles'

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
      <Styled.Wrapper>
        {data?.submissions?.length > 0 ? (
          data?.submissions?.map(submission => (
            <Submission key={submission.id} submission={submission} />
          ))
        ) : (
          <Styled.NoSubmissions>
            This Form has not yet received any submissions.
          </Styled.NoSubmissions>
        )}
      </Styled.Wrapper>
    </section>
  )
}

export default Submissions
