import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { userSelector } from '../../features/auth'
import { useGetFormQuery } from '../../services/formstack'

import classes from './EditForm.module.css'

const EditForm = () => {
  const { id } = useParams()
  const {
    user: { token },
    isLoading
  } = useSelector(userSelector)

  const { data } = useGetFormQuery({ id, token })

  console.log(data)

  return (
    <section>
      <div>
        <h1>Editing Form: {data.name}</h1>
        <div classname={classes.workspaceWrapper}></div>
      </div>
    </section>
  )
}

export default EditForm
