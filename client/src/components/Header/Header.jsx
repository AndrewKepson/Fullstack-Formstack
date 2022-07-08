import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import logo from '../../assets/images/Formstack Logo.svg'
import { menuItems } from '../../data/menuItems'
import { userSelector, logOut } from '../../features/auth'
import { Button } from '..'

import classes from './Header.module.css'

export const Header = () => {
  const { isAuthenticated } = useSelector(userSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())

    localStorage.clear()
  }

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navGroup}>
          <li className={classes.navLogo}>
            <img
              className={classes.logo}
              src={logo}
              onClick={e => navigate(`/`)}
            />
          </li>
          {menuItems.map(menuItem => (
            <li key={menuItem.name} className={classes.navMenuItem}>
              <Link to={menuItem.uri} className={classes.navLink}>
                {menuItem.name}
              </Link>
              {menuItem.children && (
                <div className={classes.flyoutMenu}>
                  <ul>
                    {menuItem.children.map(subItem => (
                      <li key={subItem.name}>{subItem.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <li className={classes.navButton}>
                <Button text="Profile" navigateTo="/profile" />
              </li>
              <li className={classes.navButton}>
                <Button text="Log Out" handler={handleLogout} />
              </li>
            </>
          ) : (
            <li className={classes.navButton}>
              <Button
                text="Log In"
                href="http://localhost:3001/authentication"
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
