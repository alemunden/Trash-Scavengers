import Image from "next/image"
import styles from '@/styles/Feed.module.css'

export default function Feed() {
    return(
        <>
            <div className={styles.feedImage}>
                <Link href='/Scrappy'>
                    <Image src={'/foodbuttons.png'} width={339} height={224} className={styles.foodButtons}/>
                </Link>
                <Image src={'/food.png'} width={400} height={480}/>
            </div>
        </>
    )
}