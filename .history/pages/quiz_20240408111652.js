import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/quiz.module.css'
import Button from '@/components/Button'
import { useState } from 'react'
import { quiz } from '@/data/data'

export default function Quiz() {
 
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });
    const {questions} = quiz;
    const {question, answers, correctAnswer} = questions[activeQuestion];

    // select and check answer
    const onAnswerSelected = (answer, idx) => {
        setChecked(true)
        setSelectedAnswerIndex(idx)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
            console.log('true')
        } else {
            setSelectedAnswer(false)
            console.log('false')
        }
    };

    // calculate score and increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) => 
        selectedAnswer ?
        {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1
        } : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1
        }
    );
    if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
    } else {
        setActiveQuestion(0)
        setShowResult(true)
    }
    setChecked(false)
    };

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
                        tabindex='1'    
                        >
                            <span>{answer}</span>
                        </li>
                    ))}
                    {checked ? (<button onClick={nextQuestion} className={styles.btn}>{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>) : (<button onClick={nextQuestion} disabled className={styles.btnDisabled}>{''}{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>)}
                </div>) : (
                <div className={styles.quizContainer}>
                    <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                    <h3 className={styles.resultsHeader} tabindex='2'>Great Job!</h3>
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
                    <Button buttonText={'Store'} bgColor="#9EBAE5" tabindex='3'/>
                </div>
                )}
            </div>
            <Link href={'/QuizBegin'}>
                <Button buttonText={'Main Menu'} bgColor="#F2CE73" tabindex='4'/>
            </Link>
        </div>
    )
}

