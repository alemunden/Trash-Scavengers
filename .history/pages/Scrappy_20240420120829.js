import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import { useState } from "react"

export default function Scrappy() {
    return(
        <>
            <div className={styles.main}>
                <div>
                    <Image src={'/foodbar.png'} height={37} width={252.4}/>
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