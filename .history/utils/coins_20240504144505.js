import { useState } from "react";
import { quiz } from '@/data/data'

export function useCoins(initialValue) {
    const [coins, setCoins] = useState(initialValue || 15)

    const buy = () => setCoins((x) => x - 5)

    return {
        coins,
        buy,
        setCoins
    }
}

export function Scrappy() {
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

    return {
        activeQuestion,
        setActiveQuestion,
        selectedAnswer,
        setSelectedAnswer,
        checked,
        setChecked,
        selectedAnswerIndex,
        setSelectedAnswerIndex,
        showResult,
        setShowResult,
        result,
        setResult,
        question,
        answers,
        correctAnswer
    }
}