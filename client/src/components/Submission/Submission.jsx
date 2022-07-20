import * as Styled from './styles'

export const Submission = ({ submission }) => {
  const { id, latitude, longitude, timestamp, user_agent } = submission

  const formatDate = date => {
    const dateLocale = navigator.language || 'en-us'

    const dateObject = new Date(date).toLocaleDateString(dateLocale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    return dateObject
  }

  return (
    <Styled.Wrapper>
      <Styled.Card>
        <Styled.CardTop>
          <Styled.Heading>
            <span>Data for Submission {id}</span>{' '}
            <span>{formatDate(timestamp)}</span>
          </Styled.Heading>
          <Styled.Details>Submitted by a user via {user_agent}.</Styled.Details>
        </Styled.CardTop>
        <Styled.CardBottom></Styled.CardBottom>
      </Styled.Card>
    </Styled.Wrapper>
  )
}
