import styles from './NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return(
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItem}>
                    <Image src={'/home-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Home</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/lb-icon.svg'} height={50} weight={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>LB</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/depots-icon.svg'} height={50} weight={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Depots</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/recycle-icon.svg'} height={50} weight={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Info</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/raccoon-icon.svg'} height={50} weight={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Game</p>
                </div>
            </div>
        </>
    )
}