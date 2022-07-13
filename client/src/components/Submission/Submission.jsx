import classes from './Submission.module.css'

export const Submission = ({ submission }) => {
  const { id, latitude, longitude, timestamp, user_agent } = submission

  const formatDate = date => {
    const dateLocale = navigator.language || 'en-us'

    const dateObject = new Date(date).toLocaleDateString(dateLocale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    return dateObject
  }

  return (
    <div className={classes.submissionWrapper}>
      <div className={classes.card}>
        <div className={classes.cardTop}>
          <div className={classes.submissionHeading}>
            <span>Data for Submission {id}</span>{' '}
            <span>{formatDate(timestamp)}</span>
          </div>
          <span className={classes.submissionDetails}>
            Submitted by a user via {user_agent}.
          </span>
        </div>
        <div className={classes.cardBottom}></div>
      </div>
    </div>
  )
}
