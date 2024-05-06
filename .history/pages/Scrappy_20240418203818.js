import NavBar from "@/components/NavBar"
import styles from '@/styles/Scrappy.module.css'
import Image from "next/image"
import { useState } from "react"
import { result, setResult } from './quiz'

export default function Scrappy() {
    return(
        <>
            <div className={styles.main}>
                <p>{result}</p>
            </div>
        </>
    )
}