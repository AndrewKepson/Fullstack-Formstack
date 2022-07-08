import { useNavigate } from 'react-router-dom'

import classes from './Button.module.css'

export const Button = ({ text, href, navigateTo, handler }) => {
  const navigate = useNavigate()

  if (navigateTo)
    return (
      <span className={classes.button} onClick={() => navigate(navigateTo)}>
        {text}
      </span>
    )

  if (handler)
    return (
      <span className={classes.button} onClick={handler}>
        {text}
      </span>
    )

  return (
    <a className={classes.button} href={href}>
      {text}
    </a>
  )
}
