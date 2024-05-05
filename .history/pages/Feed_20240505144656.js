import Image from "next/image"
import styles from '@/styles/Feed.module.css'

export default function Feed() {
    return(
        <>
            <Image src={'/food.png'} width={400} height={480}/>
        </>
    )
}