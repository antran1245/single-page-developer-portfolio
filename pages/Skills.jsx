import styles from '../styles/Skills.module.css'

export default function Skills() {
    return(
        <div className={styles.skills}>
            <div className={styles.box}>
                <h2>HTML</h2>
                <p>4 Years Experience</p>
            </div>
            <div className={styles.box}>
                <h2>CSS</h2>
                <p>4 Years Experience</p>
            </div>
            <div className={styles.box}>
                <h2>Javascript</h2>
                <p>4 Years Experience</p>
            </div>
            <div className={styles.box}>
                <h2>Accessibility</h2>
                <p>4 Years Experience</p>
            </div>
            <div className={styles.box}>
                <h2>React</h2>
                <p>3 Years Experience</p>
            </div>
            <div className={styles.box}>
                <h2>Sass</h2>
                <p>3 Years Experience</p>
            </div>
        </div>
    )
}