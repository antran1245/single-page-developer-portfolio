import Head from 'next/head'
import AboutMe from './AboutMe'
import styles from '../styles/Home.module.css'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam Keyes' Portfolio</title>
      </Head>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
