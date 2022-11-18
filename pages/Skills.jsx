import Image from 'next/image'
import styles from '../styles/Skills.module.css'

export default function Skills() {
    return(
        <section>
            <hr className={styles.line}/>
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
                <Image src={'/assets/images/pattern-rings.svg'} alt="rings" className={styles.rings} width={530} height={129}/>
            </div>
            <hr className={styles.line}/>
        </section>
    )
}