import Image from 'next/image'
import frontend from '../assets/images/icon-frontend-mentor.svg'
import github from '../assets/images/icon-github.svg'
import linkedin from '../assets/images/icon-linkedin.svg'
import twitter from '../assets/images/icon-twitter.svg'
import rings from '../assets/images/pattern-rings.svg'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return(
        <section id='contact' className={styles.contact}>
            <main>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                        <Image src={rings} alt="rings"/>
                    </div>
                    <form className={styles.col}>
                        <input type="text" placeholder="NAME"/>
                        <input type="email" placeholder="EMAIL"/>
                        <textarea placeholder='MESSAGE' rows={4}></textarea>
                        <a href='#'>SEND MESSAGE</a>
                    </form>
                </div>
                <div className={styles.row}>
                    <p>adamkeyes</p>
                    <div className={styles.link}>
                        <Image src={frontend} alt="frontend"/>
                        <Image src={github} alt="github"/>
                        <Image src={linkedin} alt="linkedin"/>
                        <Image src={twitter} alt="twitter"/>
                    </div>
                </div>
            </main>
        </section>
    )
}