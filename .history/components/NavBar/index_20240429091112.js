import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarItem}>
                    <Link href='/' className={styles.link}>
                        <Image src={'/home-icon.svg'} height={30} width={30} className={styles.navBarImage}/>
                        <p className={styles.navBarLabel}>Home</p>
                    </Link>
                </div>
                <div className={styles.navBarItem}>
                    <Link href='/Leaderboard' className={styles.link}>
                        <Image src={'/lb-icon.svg'} height={30} width={30} className={styles.navBarImage}/>
                        <p className={styles.navBarLabel}>LB</p>
                    </Link>
                </div>
                <div className={styles.navBarItem}>
                    <Link href='/Depots' className={styles.link}>
                        <Image src={'/depots-icon.svg'} height={30} width={30} className={styles.navBarImage}/>
                        <p className={styles.navBarLabel}>Depots</p>
                    </Link>
                </div>
                <div className={styles.navBarItem}>
                    <Link href='/Info' className={styles.link}>
                        <Image src={'/recycle-icon.svg'} height={30} width={30} className={styles.navBarImage}/>
                        <p className={styles.navBarLabel}>Info</p>
                    </Link>
                </div>
                <div className={styles.navBarItem}>
                    <Link href='/QuizBegin' className={styles.link}>
                        <Image src={'/raccoon-icon.svg'} height={30} width={30} className={styles.navBarImage}/>
                        <p className={styles.navBarLabel}>Game</p>
                    </Link>
                </div>
            </div>
        </>
    )
}