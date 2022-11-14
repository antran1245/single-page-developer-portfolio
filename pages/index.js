import AboutMe from './AboutMe'
import styles from '../styles/Home.module.css'
import Skills from './Skills'

export default function Home() {
  return (
    <div className={styles.container}>
      <AboutMe/>
      <Skills/>
    </div>
  )
}
