import { Button } from '..'

import * as Styled from './styles'

export const Hero = ({
  heading = 'Automate work, innovate faster',
  content = 'Automate manual processes, deliver solutions quicker, and go from idea to workflow in minutes—all with clicks, not code—with Formstack’s workplace productivity platform.',
  buttonText = 'See How It Works',
  linkText = 'Start Your Free Trial'
}) => (
  <Styled.Container>
    <Styled.TextContent>
      <Styled.Heading>{heading}</Styled.Heading>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Links>
        <Button text={buttonText} href='#' />
        <Styled.CTALink href='#'>{linkText}</Styled.CTALink>
      </Styled.Links>
    </Styled.TextContent>
    <Styled.VisualContent>
      <Styled.ContentBlock>
        <img
          src='https://via.placeholder.com/380'
          alt='Alt text for accessibility'
        />
      </Styled.ContentBlock>
    </Styled.VisualContent>
  </Styled.Container>
)
