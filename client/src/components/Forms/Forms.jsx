import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Forms = () => {
  const { id } = useParams()

  useEffect(async () => {
    // fetch form data by id from redux
  }, [])

  return (
    <section>
      <h1>Forms</h1>
    </section>
  )
}
