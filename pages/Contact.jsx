import Image from 'next/image'
import { useState } from 'react'
import styles from '/styles/Contact.module.css'

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
                        <Image src={'/assets/images/pattern-rings.svg'} alt="rings" width={530} height={129}/>
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
                        <Image src={'/assets/images/icon-frontend-mentor.svg'} alt="frontend" width="26" height="23"></Image>
                        <Image src={'/assets/images/icon-github.svg'} alt="github" width="25" height="24"/>
                        <Image src={'/assets/images/icon-linkedin.svg'} alt="linkedin" width="25" height="24"/>
                        <Image src={'/assets/images/icon-twitter.svg'} alt="twitter" width="24" height="20"/>
                    </div>
                </div>
            </div>
        </section>
    )
}