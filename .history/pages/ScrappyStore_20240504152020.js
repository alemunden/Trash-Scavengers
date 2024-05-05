import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'
import { storeItems } from '@/data/storeItems'
import { useCoins } from '@/utils/coins'
import Button from '@/components/Button'

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
                <Image src={'/storeitem.png'} width={153.6} height={73.1} onClick={buy}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
            </div>
            <div className={styles.toyItems}>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
            </div>
            <Image src={'/storebackground.png'} width={343} height={881}/>
        </div>
        </>
    )
}