import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'
import {
  useGetFormsQuery,
  useGetFormSubmissionsQuery
} from '../../services/formstack'

import { Dashboard } from '../../components'

import * as Styled from './styles'

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
    <Styled.Profile>
      <Styled.Heading>Your Profile</Styled.Heading>
      <Dashboard data={data} />
    </Styled.Profile>
  )
}

export default ProfilePage
