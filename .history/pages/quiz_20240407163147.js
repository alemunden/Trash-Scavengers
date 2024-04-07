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
    )
    }

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
                        <li
                        key={idx} 
                        onClick={() => onAnswerSelected(answer, idx)}
                        className={selectedAnswerIndex === idx ? 'liSelected' : 'liHover'}>
                            <span>{answer}</span>
                        </li>
                    ))}
                    {checked ? (<button onClick={nextQuestion} className={styles.btn}>{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>) : (<button onClick={nextQuestion} disabled className={styles.btnDisabled}>{''}{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>)}
                </div>) : (<div className={styles.quizContainer}></div>)}
            </div>
        </div>
    )
}

