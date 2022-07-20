import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Documents = styled.section`
  display: grid;
  place-content: center;
`

export const Document = styled.li`
  list-style: none;
`

export const DocumentLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
