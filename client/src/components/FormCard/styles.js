import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'

export const Container = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: var(--formstack-shadow);
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const UpperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LowerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 13rem;
  gap: 2rem;
`

export const FormLink = styled(Link)``

export const Title = styled.span`
  font-size: 1.75rem;
  line-height: 1.75rem;
  text-decoration: none;
  color: var(--formstack-black);

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
`

export const LatestSubmission = styled.span``

export const SubmissionsLink = styled.a`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #10b981;
  color: var(--formstack-black);
  border-radius: 0.375rem;
  box-shadow: var(--formstack-shadow);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

export const EditIcon = styled(FiEdit)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  color: var(--formstack-black);
`
