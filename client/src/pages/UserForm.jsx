import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userSelector } from '../features/auth'
import { useGetFormQuery } from '../services/formstack'
import { processFormHTML } from '../utils'

import classes from './UserForm.module.css'
import BeatLoader from 'react-spinners/BeatLoader'

const UserForm = () => {
  const { id } = useParams()
  const {
    user: { token }
  } = useSelector(userSelector)
  const { data, isLoading } = useGetFormQuery({ id, token })

  if (isLoading) return <BeatLoader />

  return (
    <section className={classes.container}>
      <div className={classes.formWrapper}>
        <div
          className={classes.formContent}
          dangerouslySetInnerHTML={{ __html: data?.html }}
        />
      </div>
    </section>
  )
}

export default UserForm
