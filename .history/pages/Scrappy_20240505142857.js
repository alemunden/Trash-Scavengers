import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import Link from "next/link"
import { useCoins } from "@/utils/coins"
import FeedMenu from "@/components/FeedMenu"

export default function Scrappy(result) {

    const {coins, setCoins, buy} = useCoins(15);

    document.getElementById("showMenu").style.display = 'block';
};

    return(
        <>
            <div className={styles.main}>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
                <div className={styles.coinCount}>
                    <Image src={'/Coin.png'} height={25} width={25}/>
                    <p>{coins}</p>
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
                <div id={showMenu} style="display: none;">
                    <Image src={'/feed.png'} width={400} height={480}/>
                </div>
                <div className={styles.buttons}>
                    <Image src={'/feedbutton.png'} width={136.35} height={60.75}/>
                    <Image src={'/toysbutton.png'} width={136.35} height={60.75}/>
                </div>
                <Image src={'/scrappybackground.png'} width={414} height={896}/>
            </div>
            <NavBar/>
        </>
    )
}