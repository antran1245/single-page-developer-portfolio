import Card from './Card'
import styles from '../styles/Projects.module.css'

export default function Projects() {
    return(
        <section className={styles.projects}>
            <header className={styles.heading}>
                <h1>Projects</h1>
                <a href="#">CONTACT ME</a>
            </header>
            <main className={styles.content}>
                <Card image={require('../assets/images/thumbnail-project-1-small.webp')} title="DESIGN PORTFOLIO" languages={['HTML', 'CSS']}/>
                <Card image={require('../assets/images/thumbnail-project-2-small.webp')} title="E-LEARNING LANDING PAGE" languages={['HTML', 'CSS']}/>
                <Card image={require('../assets/images/thumbnail-project-3-small.webp')} title="todo web app" languages={['HTML', 'CSS', 'JavaScript']}/>
                <Card image={require('../assets/images/thumbnail-project-4-small.webp')} title="Entertainment web app" languages={['HTML', 'CSS', 'JavaScript']}/>
                <Card image={require('../assets/images/thumbnail-project-5-small.webp')} title="memory game" languages={['HTML', 'CSS', 'JavaScript']}/>
                <Card image={require('../assets/images/thumbnail-project-6-small.webp')} title="art Gallery showcase" languages={['HTML', 'CSS', 'JavaScript']}/>
            </main>
        </section>
    )
}