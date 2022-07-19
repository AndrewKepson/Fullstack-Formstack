import { useSelector } from 'react-redux'

import { userSelector } from '../../features/auth'

import classes from './Sign.module.css'

const Sign = () => {
  const { user, isAuthenticated } = useSelector(userSelector)

  if (!isAuthenticated) return <p>Login to see your Sign data here.</p>

  return <h1>Someday the Sign API Will Be UsedHere</h1>
}

export default Sign
