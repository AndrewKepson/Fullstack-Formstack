import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1280px;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 100px 40px;
  z-index: 5;
  -webkit-box-align: center;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 50%;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  -webkit-box-align: start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`

export const Heading = styled.h1`
  margin: 0.67rem 0;
  margin-bottom: 20px;
  font-size: 78px;
  line-height: 84px;
  letter-spacing: -1px;
`

export const Content = styled.p`
  margin-bottom: 40px;
  max-width: 425px;
`

export const Links = styled.div`
  display: flex;
`

export const CTALink = styled.a`
  display: flex;
  align-items: center;
  font-family: sofia-pro, sans-serif;
  line-height: 24px;
  font-weight: 700;
  text-decoration: none;
  color: var(--formstack-black);
  -webkit-box-align: center;
`

export const VisualContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 50%;
  padding-right: 0;
  -webkit-box-pack: end;
  opacity: 1;
`

export const ContentBlock = styled.div`
  position: relative;
  width: 100%;
  display: block;
`
