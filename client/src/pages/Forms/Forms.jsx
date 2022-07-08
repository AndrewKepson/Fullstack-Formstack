import { useSelector } from 'react-redux'
import { useGetFormsQuery } from '../../services/formstack'

import { userSelector } from '../../features/auth'
import { FormCard } from '../../components'

import classes from './Forms.module.css'

const Forms = () => {
  const { user, isAuthenticated } = useSelector(userSelector)

  const { data } = useGetFormsQuery(user.token)

  if (!isAuthenticated)
    return (
      <section>
        <p>Log in to your Formstack account to see your Forms here!</p>
      </section>
    )

  return (
    <section>
      <div className={classes.container}>
        <h1>My Forms</h1>
        <div className={classes.formsContainer}>
          {data?.forms?.map(form => (
            <FormCard key={form.id} form={form} />
          ))}
          {/* Add delete button & edit button */}
        </div>
      </div>
    </section>
  )
}

export default Forms
