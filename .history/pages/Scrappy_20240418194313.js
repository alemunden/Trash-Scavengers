import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Spline from '@splinetool/react-spline';

export default function Scrappy() {
    return(
        <>
            <main className={styles.main}>
            <Spline scene="https://prod.spline.design/scCAiiykAR2pCg4g/scene.splinecode" />
            </main>
        </>
    )
}