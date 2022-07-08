// * User Profile page dashboard to view forms, submissions, etc
import { Link } from 'react-router-dom'
import classes from './Dashboard.module.css'
import { LatestFormSubmissions } from './LatestFormSubmissions'

export const Dashboard = ({ data }) => {
  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.formsList}>
        <ul>
          {data?.forms?.map(form => (
            <li key={form?.id} className={classes.listItem}>
              <Link to={`/forms/${form?.id}`} className={classes.listLink}>
                {form?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.upperRight}>
        <LatestFormSubmissions forms={data?.forms} />
      </div>
      <div className={classes.lowerRight}></div>
    </div>
  )
}
