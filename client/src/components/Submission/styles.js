import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.5rem;
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--formstack-shadow);

  @media (min-width: 768px) {
    padding: 1.5rem 4.5rem;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: larger;
  font-weight: 600;
`

export const Details = styled.span``

export const CardBottom = styled.div``
