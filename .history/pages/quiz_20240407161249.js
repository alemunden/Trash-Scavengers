import Link from 'next/link'
import styles from '@/styles/quiz.module.css'
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

    return(
        <div className={styles.container}>
            <h1>Quiz Page</h1>
            <div>
                <h2>
                    Question: {activeQuestion + 1}
                    <span>/{questions.length}</span>
                </h2>
            </div>
            <div>
                {!showResult ? (<div className={styles.quizContainer}>
                    <h3>{questions[activeQuestion].question}</h3>
                    {answers.map((answer, idx) => (
                        <li key={idx}>
                            <span>{answer}</span>
                        </li>
                    ))}
                </div>) : (<div className={styles.quizContainer}></div>)}
            </div>
        </div>
    )
}

