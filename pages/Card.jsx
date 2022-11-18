import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({image, title, languages}) {
    const [hover, onHover] =  useState(false)
    const [language, setLanguage] = useState([])
    useEffect(() => {
        setLanguage(languages)
    }, [languages])
    return(
        <div className={styles.card}>
            <div className={styles.image} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
                <Image src={image} alt={image} width="686" height="506"/>
                {hover?
                    <div className={styles.overlay}>
                        <div className={styles.overlayBox}>
                            <a href="#">VIEW PROJECT</a>
                            <a href="#">VIEW CODE</a>
                        </div>
                    </div> : null
                }
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.languagesBox}>
                {language.map((item, index) => {
                    return <span key={index} className={styles.languages}>{item}</span>
                })}
            </p>
            <p className={styles.links}>
                <a href="#">VIEW PROJECT</a>
                <a href="#">VIEW CODE</a>
            </p>
        </div>
    )
}