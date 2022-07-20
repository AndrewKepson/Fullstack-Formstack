import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 1fr 1fr;
    height: 93%;
  }
`

export const FormsList = styled.div`
  background-color: aquamarine;

  @media (min-width: 1024px) {
    grid-column: span 1 / span 1;
    grid-row: span 2 / span 2;
  }
`

export const ListItem = styled.li`
  list-style: none;
`

export const ListLink = styled(Link)`
  text-decoration: none;
`

export const UpperRight = styled.div`
  @media (min-width: 1024px) {
    background-color: rgb(223, 116, 116);
    grid-column: span 3 / span 3;
  }
`

export const LowerRight = styled.div`
  @media (min-width: 1024px) {
    background-color: rgb(89, 89, 219);
    grid-column: span 3 / span 3;
  }
`
