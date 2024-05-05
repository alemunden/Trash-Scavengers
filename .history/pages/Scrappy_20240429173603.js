import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { quiz } from "@/data/data"
import { useRouter } from "next/router"

export default function Scrappy() {

    const router = useRouter();
    const [selectedAnswer, setSelectedAnswer] = useState('0');
    const {questions} = quiz;
    let resultAnswers = [];
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (router.isReady) {
            setSelectedAnswer(router.query.resultAnswers);
        }
    }, [router.isReady]);

    return(
        <>
            <div className={styles.main}>
                <div className={styles.statusBars}>
                    <Image src={'/foodbar.png'} height={52.86} width={360.57}/>
                    <Image src={'/happinessbar.png'} height={52.86} width={360.57}/>
                </div>
                <div className={styles.storeButton}>
                    <Link href={'/ScrappyStore'}>
                        <Image src={'/storebutton.png'} width={153.6} height={73.1} />
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Image src={'/feedbutton.png'} width={136.35} height={60.75}/>
                    <Image src={'/toysbutton.png'} width={136.35} height={60.75}/>
                </div>
                <Image src={'/scrappybackground.png'} width={414} height={896}/>
            </div>
        </>
    )
}