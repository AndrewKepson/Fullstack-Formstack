import { Link } from 'react-router-dom'

import * as Styled from './styles'

import formsLogo from '../../assets/images/Formstack_Forms_Product_Icon.svg'
import documentsLogo from '../../assets/images/Formstack_Documents_Product_Icon.svg'
import signLogo from '../../assets/images/Formstack_Sign_Product_Icon.svg'

export const Footer = () => (
  <Styled.Footer>
    <Styled.Tagline>Made by Andrew @ Formstack</Styled.Tagline>
    <Styled.Information>
      Formstack is a software company offering dedicated solutions to build
      forms without code, manage workflows, generate documents, securely sign
      documents, and more. This project is an example using Formstack's various
      REST APIs in the context of a modern React web application.
    </Styled.Information>
    <Styled.BrandLogos>
      <Link to='/forms'>
        <Styled.BrandIcon src={formsLogo} alt='Forms' />
      </Link>
      <Link to='/documents'>
        <Styled.BrandIcon src={documentsLogo} alt='Forms' />
      </Link>
      <Link to='/sign'>
        <Styled.BrandIcon src={signLogo} alt='Forms' />
      </Link>
    </Styled.BrandLogos>
  </Styled.Footer>
)
