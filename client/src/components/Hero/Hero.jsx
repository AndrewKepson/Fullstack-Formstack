import { Button } from '..'
import classes from './Hero.module.css'

export const Hero = ({
  heading = 'Automate work, innovate faster',
  content = 'Automate manual processes, deliver solutions quicker, and go from idea to workflow in minutes—all with clicks, not code—with Formstack’s workplace productivity platform.',
  buttonText = 'See How It Works',
  linkText = 'Start Your Free Trial',
}) => (
  <section className={classes.container}>
    <div className={classes.textContent}>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={classes.content}>{content}</p>
      <div className={classes.links}>
        <Button text={buttonText} href="#" />
        <a className={classes.ctaLink} href="#">
          {linkText}
        </a>
      </div>
    </div>
    <div className={classes.visualConent}>
      <div className={classes.contentBlock}>
        <img
          className={classes.image}
          src="https://via.placeholder.com/380"
          alt="Alt text for accessibility"
        />
      </div>
    </div>
  </section>
)
