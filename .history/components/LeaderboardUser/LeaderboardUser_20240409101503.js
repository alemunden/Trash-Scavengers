import styles from './LeaderboardUser.module.css'
import Image from 'next/image'

export default function LeaderboardUser({username, score}) {
    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <div className={styles.userContainer}>
                <Image src={'/accountcircle.svg'} width={36} height={36}/>
                <p className={styles.username}>{username}</p>
                <p className={styles.score}>{score}</p>
            </div>
        </>
    )
}