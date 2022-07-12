import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { userSelector } from '../../features/auth'
import { useGetFormQuery } from '../../services/formstack'

import classes from './EditForm.module.css'
import { FormEditor } from '../../components'

const EditForm = () => {
  const { id } = useParams()
  const {
    user: { token },
    isLoading
  } = useSelector(userSelector)
  const { data } = useGetFormQuery({ id, token })

  const updateForm = fieldState => {
    const updatedForm = { ...data, fields: fieldState }
    console.log(updatedForm)
  }

  if (isLoading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )

  return (
    <section>
      <div>
        <h1>Editing Form: {data?.name}</h1>
        <div classname={classes.workspaceWrapper}>
          <FormEditor
            columns={data?.num_columns}
            fields={data?.fields}
            updateForm={updateForm}
          />
        </div>
      </div>
    </section>
  )
}

export default EditForm
