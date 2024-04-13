import styles from './LeaderboardUser.module.css'
import Image from 'next/image'

export default function LeaderboardUser() {
    return(
        <>
            <div>
                <Image src={'/accountcircle.svg'} width={36} height={36}/>
            </div>
        </>
    )
}