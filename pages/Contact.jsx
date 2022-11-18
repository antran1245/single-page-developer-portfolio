import Image from 'next/image'
import { useState } from 'react'
import frontend from '../assets/images/icon-frontend-mentor.svg'
import github from '../assets/images/icon-github.svg'
import linkedin from '../assets/images/icon-linkedin.svg'
import twitter from '../assets/images/icon-twitter.svg'
import rings from '../assets/images/pattern-rings.svg'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    const [errors, setErrors] = useState({name: false, email: false, message: false})
    const [form, setForm] = useState({name: '', email: '', message: ''})

    const formSubmitted = async(e) => {
        e.preventDefault()
        await setErrors({name: form.name === '', email: form.email === '', message: form.message === ''})
        if(!(/^\w+([\.+]?\w+)*@\w+([\.-|+|]?\w+)*(\.\w{2,3})+$/.test(form.email))) {
            setErrors({name: form.name === '', email: true, message: form.message === ''})
        }
        if(form.name !== '' && form.email !== '' &&  form.message !== '') {
            alert('This is not a real Portfolio')
        }
    }
    return(
        <section id='contact' className={styles.contact}>
            <div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                        <Image src={rings} alt="rings"/>
                    </div>
                    <form className={styles.col}>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="NAME" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                                {errors.name ? <span className={styles.errorCircle}>&#33;</span> : null }
                            </div>
                            {errors.name ? <p className={styles.error}>Cannot be blank</p> : null }
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="EMAIL" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                                {errors.email ? <span className={styles.errorCircle}>&#33;</span> : null }
                            </div>
                            {errors.email ? <p className={styles.error}>Sorry, invalid format here</p> : null }
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <textarea placeholder='MESSAGE' rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                                {errors.message ? <span className={styles.errorCircle}>&#33;</span> : null }
                            </div>
                            {errors.message ? <p className={styles.error}>Cannot be blank</p> : null }
                        </div>
                        <a onClick={formSubmitted}>SEND MESSAGE</a>
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
            </div>
        </section>
    )
}