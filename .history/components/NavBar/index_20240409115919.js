import styles from './NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItem}>
                    <Image src={'/home-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Home</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/lb-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>LB</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/depots-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Depots</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/recycle-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Info</p>
                </div>
                <div className={styles.navBarItem}>
                    <Image src={'/raccoon-icon.svg'} height={50} width={50} className={styles.navBarImage}/>
                    <p className={styles.navBarLabel}>Game</p>
                </div>
            </div>
        </>
    )
}