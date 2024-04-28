import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import { Application, document } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/scCAiiykAR2pCg4g/scene.splinecode');



export default function Scrappy() {
    return(
        <>
            <main className={styles.main}>

            </main>
        </>
    )
}