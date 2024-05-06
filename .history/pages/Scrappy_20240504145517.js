import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import Link from "next/link"
import { useCounter } from "react"
import { useCoins } from "@/utils/coins"

export default function Scrappy(result) {

    const {coins, setCoins, buy} = useCoun

    return(
        <>
            <div className={styles.main}>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
                <div className={styles.coinCount}>
                    <Image src={'/Coin.png'} height={25} width={25}/>
                    <p></p>
                </div>
                <div className={styles.statusBars}>
                    <Image src={'/foodbar.png'} height={52.86} width={360.57}/>
                    <Image src={'/happinessbar.png'} height={52.86} width={360.57}/>
                </div>
                <div className={styles.storeButton}>
                    <Link href={'/ScrappyStore'}>
                        <Image src={'/storebutton.png'} width={153.6} height={73.1} />
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Image src={'/feedbutton.png'} width={136.35} height={60.75}/>
                    <Image src={'/toysbutton.png'} width={136.35} height={60.75}/>
                </div>
                <Image src={'/scrappybackground.png'} width={414} height={896}/>
            </div>
        </>
    )
}