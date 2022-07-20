import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Container = styled.section`
  font-family: 'Karla', sans-serif;
`

export const HeadingOne = styled.h1`
  animation: ${fadeIn} 3s;
`
