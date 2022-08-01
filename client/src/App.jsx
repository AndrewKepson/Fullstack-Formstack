import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { setUser } from './features/auth'
import { Layout } from './components'

import {
    Home,
    Auth,
    Profile,
    Forms,
    Form,
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
                <Route path="/" element={<Home />} />
                <Route path="/authorization" element={<Auth />} />
                <Route path="/documents">
                    <Route index element={<Documents />} />
                    <Route path="form-to-document" element={<FormToDocument />} />
                    <Route path=":id" element={<Document />} />
                </Route>
                <Route path="/forms">
                    <Route index element={<Forms />} />
                    <Route path=":id">
                        <Route index element={<Form />} />
                        <Route path="submissions" element={<Submissions />} />
                        <Route path="edit" element={<EditForm />} />
                    </Route>
                </Route>
                <Route path="/sign" element={<Sign />} />
                <Route path="/client-fetch" element={<ClientFetch />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Layout>
    )
}

export default App
