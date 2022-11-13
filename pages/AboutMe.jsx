import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
    return(
        <main>
            <div className={styles.aboutMe}>
                <h2>Nice to meet you! I'm <span>Adam Keyes</span>.</h2>
                <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
            </div>
            <div className={styles.profile}></div>
        </main>
    )
}