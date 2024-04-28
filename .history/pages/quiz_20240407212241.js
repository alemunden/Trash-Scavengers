import Link from 'next/link'
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
                        className={selectedAnswerIndex === idx ? 'liSelected' : 'liHover'}>
                            <span>{answer}</span>
                        </li>
                    ))}
                    {checked ? (<button onClick={nextQuestion} className={styles.btn}>{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>) : (<button onClick={nextQuestion} disabled className={styles.btnDisabled}>{''}{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>)}
                </div>) : (
                <div className={styles.quizContainer}>
                    <h3 className={styles.resultsHeader}>Great Job!</h3>
                    <h3>Overall {(result.score /25) * 100}%</h3>
                    <p>Total questions: <span>{questions.length}</span></p>
                    <div className={styles.coinsContainer}>
                        <p><span>{result.score}</span> Coins</p>
                    </div>
                    <div className={styles.correctAnswersContainer}>
                        <p className={styles.correctAnswers}><span>{result.correctAnswers}/{questions.length}</span></p>
                    </div>
                    <p>Wrong answers: <span>{result.wrongAnswers}</span></p>
                    <button onClick={()=> window.location.reload()}>Restart</button>
                </div>
                )}
            </div>
            <Button buttonText={'Main Menu'} bgColor="#F2CE73"/>
        </div>
    )
}
