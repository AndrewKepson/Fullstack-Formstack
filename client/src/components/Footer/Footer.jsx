import { Link } from 'react-router-dom'

import classes from './Footer.module.css'

import formsLogo from '../../assets/images/Formstack_Forms_Product_Icon.svg'
import documentsLogo from '../../assets/images/Formstack_Documents_Product_Icon.svg'
import signLogo from '../../assets/images/Formstack_Sign_Product_Icon.svg'

export const Footer = () => (
  <footer className={classes.footer}>
    <p className={classes.tagline}>Made by Andrew @ Formstack</p>
    <p className={classes.information}>
      Formstack is a software company offering dedicated solutions to build
      forms without code, manage workflows, generate documents, securely sign
      documents, and more. This project is an example using Formstack's various
      REST APIs in the context of a modern React web application.
    </p>
    <div className={classes.brandLogos}>
      <Link to="/forms">
        <img className={classes.brandIcon} src={formsLogo} alt="Forms" />
      </Link>
      <Link to="/documents">
        <img className={classes.brandIcon} src={documentsLogo} alt="Forms" />
      </Link>
      <Link to="/sign">
        <img className={classes.brandIcon} src={signLogo} alt="Forms" />
      </Link>
    </div>
  </footer>
)
