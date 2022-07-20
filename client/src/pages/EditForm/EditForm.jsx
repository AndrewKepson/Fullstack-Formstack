import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { userSelector } from '../../features/auth'
import { useGetFormQuery } from '../../services/formstack'

import { FormEditor } from '../../components'

import * as Styled from './styles'

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
        <Styled.Header>Editing Form: {data?.name}</Styled.Header>
        <Styled.WorkSpace>
          <FormEditor
            columns={data?.num_columns}
            fields={data?.fields}
            updateForm={updateForm}
          />
        </Styled.WorkSpace>
      </div>
    </section>
  )
}

export default EditForm
