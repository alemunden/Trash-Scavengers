import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/quiz.module.css'
import Button from '@/components/Button'
import { useState, useRouter } from 'react'
import { quiz } from '@/data/data'
import Score from '@/components/Score'
import { scrappy } from '@/utils/coins'

export default function Quiz(childParent) {
 
    

    return(
        <div className={styles.container}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <div className={styles.questionHeaderContainer}>
                <div className={styles.coin}></div>
                <p className={styles.pointsCounter}>{result.score}</p>
                <h2 className={styles.questionHeader}>
                    Question {activeQuestion + 1}
                    <span>/{questions.length}</span>
                </h2>
            </div>
            <div className={styles.quizList}>
                {!showResult ? (<div className={styles.quizContainer}>
                    <h3 className={styles.question}>{questions[activeQuestion].question}</h3>
                    {answers.map((answer, idx) => (
                        <li
                        key={idx} 
                        onClick={() => onAnswerSelected(answer, idx)}
                        className={selectedAnswerIndex === idx ? 'liSelected' : 'liHover'}
                        tabIndex='1'    
                        >
                            <span>{answer}</span>
                        </li>
                    ))}
                    {checked ? (<button onClick={nextQuestion} className={styles.btn}>{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>) : (<button onClick={nextQuestion} disabled className={styles.btnDisabled}>{''}{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>)}
                </div>) : (
                <div className={styles.quizContainer}>
                    <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                    <h3 className={styles.resultsHeader} tabIndex='2'>Great Job!</h3>
                    <div className={styles.circlesContainer}>
                        <div className={styles.correctAnswersContainer}>
                            <p className={styles.correctAnswers}><span>{result.correctAnswers}/{questions.length}</span></p>
                        </div>
                        <div className={styles.coinsContainer}>
                            <p className={styles.coins}><span>{result.score}</span> Coins</p>
                        </div>
                    </div>
                    <p className={styles.sammyText}>Take care of Sammy using<br/>your coins!</p>
                    <Image src={'/arrow.svg'} width={18} height={21} alt='An arrow icon'/>
                    <Link href='/Scrappy'>
                        <Score display={0} result={result}/>
                        <Button buttonText={'Store'} bgColor="#9EBAE5" tabIndex='3'/>
                    </Link>
                </div>
                )}
            </div>
            <Link href={'/QuizBegin'}>
                <Button buttonText={'Main Menu'} bgColor="#F2CE73" tabIndex='4'/>
            </Link>
        </div>
    )
}

