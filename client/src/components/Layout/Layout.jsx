import { Header, Footer } from '../../components'

import classes from './Layout.module.css'

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className={classes.main}>{children}</main>
    <Footer />
  </>
)
