import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"

export default function Scrappy() {
    return(
        <>
            <main className={styles.main}>
                <Image src={'/scrappybackground'} width={414} height={986}/>
            </main>
        </>
    )
}