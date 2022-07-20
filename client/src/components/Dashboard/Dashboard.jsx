// * User Profile page dashboard to view forms, submissions, etc
import { LatestFormSubmissions } from './LatestFormSubmissions'

import * as Styled from './styles'

export const Dashboard = ({ data }) => {
  console.log(data)
  return (
    <Styled.Container>
      <Styled.FormsList>
        <ul>
          {data?.forms?.map(form => (
            <Styled.ListItem key={form?.id}>
              <Styled.ListLink to={`/forms/${form?.id}`}>
                {form?.name}
              </Styled.ListLink>
            </Styled.ListItem>
          ))}
        </ul>
      </Styled.FormsList>
      <Styled.UpperRight>
        <LatestFormSubmissions forms={data?.forms} />
      </Styled.UpperRight>
      <Styled.LowerRight></Styled.LowerRight>
    </Styled.Container>
  )
}
