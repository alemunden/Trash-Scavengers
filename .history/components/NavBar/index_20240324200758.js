import styles from './NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return(
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItem}>
                    <Image src={'/home-icon.svg'} height={50} weight={50}/>
                    <p>Home</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/lb-icon.svg'} height={50} weight={50}/>
                    <p>LB</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/depots-icon.svg'} height={50} weight={50}/>
                    <p>Depots</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/recycle-icon.svg'} height={50} weight={50}/>
                    <p>Info</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/raccoon-icon.svg'} height={50} weight={50}/>
                    <p>Game</p>
                </div>
            </div>
        </>
    )
}