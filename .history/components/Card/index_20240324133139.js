import styles from './Card.module.css'

export default function Card() {
    return(
        <>
        <div className={styles.cardContainer}>
            <div className={styles.cardHeaderContainer}></div>
            <div className={styles.cardInnerContainer}></div>
        </div>
        </>
    )
}