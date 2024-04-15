import styles from './styles.module.css'
import Content from '../content/page'




export default function webDevelopment () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Apps to Learn Web Development</h1>
            </div>
           <Content/>
        </div>
    )
}