import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'
import { useGetFormQuery } from '../../services/formstack'
import { processFormHTML } from '../../utils'
import BeatLoader from 'react-spinners/BeatLoader'

import * as Styled from './styles'

const Form = () => {
  const { id } = useParams()
  const {
    user: { token }
  } = useSelector(userSelector)
  const { data, isLoading } = useGetFormQuery({ id, token })

  if (isLoading) return <BeatLoader />

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Content dangerouslySetInnerHTML={{ __html: data?.html }} />
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Form
