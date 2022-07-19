import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'

import * as Styled from './styles'

export const FormCard = ({ form }) => (
  <Styled.Container>
    <Styled.Card>
      <Styled.UpperLeft>
        <Styled.FormLink to={`/forms/${form.id}`}>
          <Styled.Title>{form.name}</Styled.Title>
        </Styled.FormLink>
        <div className={classes.icons}>
          <Link to={`/forms/${form.id}/edit`}>
            <FiEdit className={classes.editIcon} />
          </Link>
        </div>
      </Styled.UpperLeft>
      <Styled.LowerRight>
        <Styled.LatestSubmission>
          {form.last_submission_time}
        </Styled.LatestSubmission>
        <Styled.SubmissionsLink href={`/forms/${form.id}/submissions`}>
          View Submissions
        </Styled.SubmissionsLink>
      </Styled.LowerRight>
    </Styled.Card>
  </Styled.Container>
)
