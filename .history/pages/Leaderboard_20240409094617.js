import styles from '@/styles/Leaderboard.module.css'
import Image from 'next/image'

export default function Leaderboard() {
    return(
        <main>
            <div>
                <h1>Leaderboard: Top Scores</h1>
            </div>
            <div>
                <Image src={'/accountcircle.svg'} width={70} height={70}/>
            </div>
        </main>
    )
}