import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section>
            <Image src={'/assets/images/pattern-rings.svg'} alt="rings" className={styles.rings} width={530} height={129}/>
            <div className={styles.heading}>
                <p>adamkeyes</p>
                <div className={styles.link}>
                    <Image src={'/assets/images/icon-frontend-mentor.svg'} alt="frontend" width="26" height="23"/>
                    <Image src={'/assets/images/icon-github.svg'} alt="github" width="25" height="24"/>
                    <Image src={'/assets/images/icon-linkedin.svg'} alt="linkedin" width="25" height="24"/>
                    <Image src={'/assets/images/icon-twitter.svg'} alt="twitter" width="24" height="20"/>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.text}>
                    <h2>Nice to meet you! I&#39;m <span>Adam Keyes</span>.</h2>
                    <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                    <div className={styles.circle}>
                        <a onClick={scrollToContact}>CONTACT ME</a>
                        <Image src={'/assets/images/pattern-circle.svg'} alt="circle" width="129" height="129"/>
                    </div>
                </div>
                <div className={styles.profile}></div>
            </div>
        </section>
    )
}