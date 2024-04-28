import styles from '@/styles/ScrappyStore.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ScrappyStore() {
    return(
        <>
        <div className={styles.store}>
            <div className={styles.foodItems}>
                <Link>
                    <Image src={'/storeitem.png'} width={153.6} height={73.1}/>
                </Link>
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