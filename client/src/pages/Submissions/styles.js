import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem 3rem 2rem;
    gap: 2rem;
  }
`

export const NoSubmissions = styled.span``
