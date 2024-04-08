import styles from "@/styles/QuizBegin.module.css";
import Link from 'next/link'

export default function QuizBegin() {
  return (
      <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
        <div>
            <h1>Quiz App</h1>
            <Link href='/quiz'>
                <button>Start Quiz</button>
            </Link>
        </div>
      </main>
  );
}