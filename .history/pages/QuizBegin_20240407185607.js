import styles from "@/styles/QuizBegin.module.css";
import Link from 'next/link'

export default function QuizBegin() {
  return (
      <main>
        <div>
            <h1>Quiz App</h1>
            <Link href='/quiz'>
                <button>Start Quiz</button>
            </Link>
        </div>
      </main>
  );
}