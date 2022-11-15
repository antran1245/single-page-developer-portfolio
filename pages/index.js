import AboutMe from './AboutMe'
import styles from '../styles/Home.module.css'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
