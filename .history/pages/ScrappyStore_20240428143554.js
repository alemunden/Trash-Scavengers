import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'

export default function ScrappyStore() {
    return(
        <>
        <div className={styles.store}>
            <div className={styles.storeItems}>
                <Image src={'/storeitem.png'} width={125.55} height={82.25}/>
            </div>
            <Image src={'/storebackground.png'} width={343} height={881}/>
        </div>
        </>
    )
}