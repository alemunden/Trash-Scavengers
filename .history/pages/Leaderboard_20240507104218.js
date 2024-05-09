import styles from '@/styles/Leaderboard.module.css'
import Image from 'next/image'
import LeaderboardUser from '@/components/LeaderboardUser/LeaderboardUser'
import NavBar from '@/components/NavBar'

export default function Leaderboard() {
    return(
        <main>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <div className={styles.titleContainer}>
                <h1 className={styles.titleText}>Leaderboard: Top Scores</h1>
            </div>
            <div className={styles.podium}>
                <div className={styles.podiumContainer}>
                    <div className={styles.lowerPodiumleft}>
                        <p className={styles.score}>Score</p>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3 className={styles.username}>GeekTrout</h3>
                    </div>
                    <div className={styles.firstPlace}>
                        <Image src={'/crown.svg'} width={54} height={42}/>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3 className={styles.username}>ImpMascot</h3>
                        <p className={styles.score}>25</p>
                    </div>
                    <div className={styles.lowerPodiumright}>
                        <p className={styles.score}>Score</p>
                        <Image src={'/accountcircle.svg'} width={70} height={70}/>
                        <h3 className={styles.username}>OddsGiver</h3>
                    </div>
                </div>
            </div>
            <div className={styles.leaderboard}>
                <LeaderboardUser username={'ChuckleStardust'} score={'20'}/>
                <LeaderboardUser username={'WitSardonic'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
                <LeaderboardUser username={'username'} score={'20'}/>
            </div>
            <NavBar tabIndex="1"/>
        </main>
    )
}