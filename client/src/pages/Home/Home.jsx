import { Hero } from '../../components/Hero/Hero'
import classes from './Home.module.css'

const Home = () => (
  <section className={classes.container}>
    <h1 className={classes.heading1}>Welcome to Fullstack Formstack</h1>
    <Hero />
    <p>
      Fullstack Formstack is a React web application filled with examples for
      interacting with Formstack products via the Formstack & Webmerge APIs to
      view, submit, and manage Forms, and to merge data into Documents using a
      decoupled front end.
    </p>
    <p>
      Why is it called fullstack instead of headless? This application uses a
      Node server to interact with the Formstack API, and in turn the front end
      interacts with the Node server and manages state with Redux Toolkit.
    </p>
  </section>
)

export default Home
