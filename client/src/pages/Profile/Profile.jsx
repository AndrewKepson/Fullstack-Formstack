import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'
import {
  useGetFormsQuery,
  useGetFormSubmissionsQuery
} from '../../services/formstack'

import { Dashboard } from '../../components'
import classes from './Profile.module.css'

const ProfilePage = () => {
  const { user, isAuthenticated } = useSelector(userSelector)
  const { data } = useGetFormsQuery(user.token)

  // const submissionsData = forms => {
  //   forms.forEach(form =>
  //     useGetFormSubmissionsQuery({ form.id, user.token })
  //   )
  // }

  if (!isAuthenticated) return <h1>Please Login</h1>

  return (
    <section className={classes.profile}>
      <h1 className={classes.heading}>Your Profile</h1>
      <Dashboard data={data} />
    </section>
  )
}

export default ProfilePage
