import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'

import classes from './FormCard.module.css'

export const FormCard = ({ form }) => (
  <div className={classes.cardContainer}>
    <div className={classes.card}>
      <div className={classes.upperLeft}>
        <Link className={classes.link} to={`/forms/${form.id}`}>
          <span className={classes.title}>{form.name}</span>
        </Link>
        <div className={classes.icons}>
          <Link to={`/forms/${form.id}/edit`}>
            <FiEdit className={classes.editIcon} />
          </Link>
        </div>
      </div>
      <div className={classes.lowerRight}>
        <span className={classes.latestSubmission}>
          {form.last_submission_time}
        </span>
        <a
          className={classes.submissionsLink}
          href={`/forms/${form.id}/submissions`}>
          View Submissions
        </a>
      </div>
    </div>
  </div>
)
