import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import { useState } from "react"

export default function Scrappy() {
    return(
        <>
            <div className={styles.main}>
                <Image src={'/scrappybackground.png'} width={414} height={896}/>
            </div>
        </>
    )
}