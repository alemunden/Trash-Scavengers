import Image from "next/image"
import styles from '@/styles/Feed.module.css'

export default function Feed() {
    return(
        <>
            <Image src={''} width={400} height={480} className={styles.feedImage}/>
        </>
    )
}