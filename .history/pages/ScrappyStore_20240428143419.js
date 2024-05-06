import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'

export default function ScrappyStore() {
    return(
        <>
        <div className={styles.store}>
            <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
            <Image src={'/storebackground.png'} width={343} height={881}/>
        </div>
        </>
    )
}