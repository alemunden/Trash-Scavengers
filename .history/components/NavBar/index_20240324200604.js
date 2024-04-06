import styles from './NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return(
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItem}>
                    <Image src={'/home-icon.svg'} height={50} weight={50}/>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/lb-icon.svg'} height={50} weight={50}/>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/depots-icon.svg'} height={50} weight={50}/>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/recycle-icon.svg'} height={50} weight={50}/>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/raccoon-icon.svg'} height={50} weight={50}/>
                </div>
            </div>
        </>
    )
}