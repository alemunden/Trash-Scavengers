import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { storeItems } from '@/data/storeItems'
import { useCoins } from '@/utils/coins'

export default function ScrappyStore() {

    const {coins, setCoins, buy} = useCoins(15)

    return(
        <>
        <div className={styles.store}>
            <div className={styles.coinCount}>
                <Image src={'/Coin.png'} height={25} width={25}/>
                <p>{coins}</p>
            </div>
            <div className={styles.foodItems}>
                <Image src={'appleicon.svg'} width={50.2} height={51.2} className={styles.apple} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="1"/>
                <Image src={'/bananaicon.svg'} width={55.9} height={80} className={styles.banana} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="2"/>
                <Image src={'/burgericon.svg'} width={69.01} height={59.21} className={styles.burger} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="3"/>
                <Image src={'/cookiesicon.svg'} width={57.92} height={59.21} className={styles.cookie} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="4"/>
            </div>
            <div className={styles.toyItems}>
                <Image src={'/ballicon.svg'} width={61.47} height={54.21} className={styles.ball} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="6"/>
                <Image src={'/rattleicon.svg'} width={60.7} height={61} className={styles.rattle} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="7"/>
                <Image src={'/blanketicon.svg'} width={66.7} height={66.7} className={styles.blanket} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="8"/>
                <Image src={'/rubikscubeicon.svg'} width={88.65} height={59.4}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy} tabIndex="9"/>
            </div>
            <Image src={'/storebackground.png'} width={343} height={881}/>
        </div>
        <Link href='/Scrappy'>
            <button className={styles.backButton} tabIndex="5">Back</button>
        </Link>
        </>
    )
}