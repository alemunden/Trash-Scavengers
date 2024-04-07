import Link from 'next/link'
import styles from '@/styles/quiz.module.css'
import { useState } from 'react'
import { quiz } from '@/data/data'

export default function Quiz() {



    return(
        <div className={styles.container}>
            <h1>Quiz Page</h1>
            <div>
                <h2>
                    Question: 1
                    <span>/5</span>
                </h2>
            </div>
        </div>
    )
}

