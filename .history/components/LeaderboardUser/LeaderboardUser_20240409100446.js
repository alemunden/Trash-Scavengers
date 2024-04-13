import styles from './LeaderboardUser.module.css'
import Image from 'next/image'

export default function LeaderboardUser(username, score) {
    return(
        <>
            <div className={}>
                <Image src={'/accountcircle.svg'} width={36} height={36}/>
                <p>{username}</p>
                <p>{score}</p>
            </div>
        </>
    )
}