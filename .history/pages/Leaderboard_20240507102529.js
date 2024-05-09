import styles from '@/styles/Leaderboard.module.css'
import Image from 'next/image'
import LeaderboardUser from '@/components/LeaderboardUser/LeaderboardUser'
import NavBar from '@/components/NavBar'

export default function Leaderboard() {
    return(
        <main>
            <div>
                <h1>Leaderboard: Top Scores</h1>
            </div>
            <div className={styles.podium}>
                <div className={styles.podiumContainer}>
                    <div className={styles.lowerPodiumleft}>
                        <p>Score</p>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3>Username</h3>
                    </div>
                    <div className={styles.firstPlace}>
                        <Image src={'/crown.svg'} width={54} height={42}/>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3>Username</h3>
                        <p>Score</p>
                    </div>
                    <div className={styles.lowerPodiumright}>
                        <p>Score</p>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3>Username</h3>
                    </div>
                </div>
            </div>
            <div className={styles.leaderboard}>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
            </div>
            <NavBar tabIndex="1"/>
        </main>
    )
}