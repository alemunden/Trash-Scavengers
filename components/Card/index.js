import styles from './Card.module.css'

export default function Card({header}) {
    return(
        <>
        <div className={styles.cardContainer}>
            <div className={styles.cardHeaderContainer}>
                <h1>{header}</h1>
            </div>
            <div className={styles.cardInnerContainer}></div>
        </div>
        </>
    )
}