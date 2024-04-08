import styles from "@/styles/QuizBegin.module.css";
import Link from 'next/link'
import Button from "@/components/Button";

export default function QuizBegin() {
  return (
      <main className={styles.main}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        <div className={styles.items}>
            <h1 className={styles.quizHeader}>Quiz App</h1>
            <Link href='/quiz'>
                <Button buttonText={'Start Quiz'} bgColor="#56B847"/>
            </Link>
            <Button buttonText={'Tutorial'} bgColor="#3C8DEE"/>
        </div>
      </main>
  );
}