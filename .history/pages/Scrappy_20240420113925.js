import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import { useState } from "react"

export default function Scrappy() {
    return(
        <>
            <div className={styles.main}>
                <div>
                    <Image src={'/feedbutton.png'} width={90.9} height={40.5}/>
                    <Image src={'/toysbutton.png'} width={136.35} height={60.75}/>
                </div>
                <Image src={'/scrappybackground.png'} width={414} height={896}/>
            </div>
        </>
    )
}