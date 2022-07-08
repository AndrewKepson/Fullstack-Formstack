import { Header, Footer } from '../../components'

import classes from './Layout.module.css'

export const Layout = ({ children }) => (
  <div className={classes.appWindow}>
    <Header />
    <main className={classes.main}>{children}</main>
    <Footer />
  </div>
)
