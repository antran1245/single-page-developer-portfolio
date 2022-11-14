import AboutMe from './AboutMe'
import styles from '../styles/Home.module.css'
import Skills from './Skills'
import Projects from './Projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  )
}
