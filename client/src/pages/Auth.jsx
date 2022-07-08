import { useEffect } from 'react'
import axios from 'axios'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BeatLoader from 'react-spinners/BeatLoader'

import { setUser } from '../features/auth'

const useCustomSearchParams = () => {
  const [search, setSearch] = useSearchParams()

  const object = Object.fromEntries(new URLSearchParams(search))

  return [object, setSearch]
}

const Auth = () => {
  const searchParams = useCustomSearchParams()[0]
  const authCode = searchParams.code
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const authenticateUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/authentication`,
        {
          code: authCode,
        }
      )

      const user = {
        id: response.data.user_id,
        token: response.data.access_token,
      }

      localStorage.setItem('user', JSON.stringify(user))

      dispatch(setUser(user))

      navigate(`/profile`)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <div>
      <BeatLoader />
    </div>
  )
}

export default Auth
