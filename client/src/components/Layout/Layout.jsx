import { Header, Footer } from '../../components'

import * as Styled from './styles'

export const Layout = ({ children }) => (
  <>
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </>
)
