import Image from "next/image";
import styles from '@/styles/Toys.module.css'
import Link from "next/link";

export default function Toys() {
    return(
        <>
            <div className={styles.toysImage}>
                <Link href='/Scrappy'>
                    <Image src={'/toysbuttons.png'} width={339} height={224} className={styles.toysButtons}/>
                </Link>
                <Image src={'/toys.png'} width={400} height={480}/>
            </div>
        </>
    )
}