import styles from '@/styles/Leaderboard.module.css'
import Image from 'next/image'

export default function Leaderboard() {
    return(
        <main>
            <div>
                <h1>Leaderboard: Top Scores</h1>
            </div>
            <div>
                <div>
                    <p>Score</p>
                    <Image src={'/accountcircle.svg'} width={70} height={70}/>
                    <h3>Username</h3>
                </div>
                <div>
                    <Image src={'/crown.svg'} width={54} height={42}/>
                    <Image src={'/accountcircle.svg'} width={70} height={70}/>
                    <h3>Username</h3>
                    <p>Score</p>
                </div>
                <div>
                    <p>Score</p>
                    <Image src={'/accountcircle.svg'} width={70} height={70}/>
                    <h3>Username</h3>
                </div>
            </div>
        </main>
    )
}