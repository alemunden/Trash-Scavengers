import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'

export default function ScrappyStore() {
    return(
        <>
        <div className={styles.store}>
            <div className={styles.foodItems}>
                <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
            </div>
            <Image src={'/storebackground.png'} width={343} height={881}/>
        </div>
        </>
    )
}