import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { setUser } from './features/auth'
import { Layout } from './components'

import './App.css'

import {
  Home,
  Auth,
  Profile,
  Forms,
  UserForm,
  EditForm,
  Submissions,
  FormToDocument,
  ClientFetch,
  Documents,
  Document,
  Sign
} from './pages'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user')

    if (isLoggedIn) {
      const user = JSON.parse(isLoggedIn)

      dispatch(setUser(user))
    }
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authorization' element={<Auth />} />
        <Route path='/documents' element={<Documents />} />
        <Route
          path='/documents/form-to-document'
          element={<FormToDocument />}
        />
        <Route path='/documents/:id' element={<Document />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/forms/:id' element={<UserForm />} />
        <Route path='/forms/:id/submissions' element={<Submissions />} />
        <Route path='/forms/:id/edit' element={<EditForm />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/client-fetch' element={<ClientFetch />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App
