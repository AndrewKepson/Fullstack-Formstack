import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  padding: 0.75rem 0.5rem;
  height: fit-content;
  width: 100%;
  color: var(--formstack-slate-100);
  background-color: var(--formstack-dark-grey);
`
export const Tagline = styled.p`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const Information = styled.p`
  font-size: 0.7rem;
  line-height: 1.1rem;
`
export const BrandLogos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    height: 50%;
  }
`
export const BrandIcon = styled.img`
  height: 3rem;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    height: 100px;
  }
`
