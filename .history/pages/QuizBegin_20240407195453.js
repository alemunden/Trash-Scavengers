import styles from "@/styles/QuizBegin.module.css";
import Link from 'next/link'
import Button from "@/components/Button";
import Image from 'next/image'

export default function QuizBegin() {
  return (
      <main className={styles.main}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        <div className={styles.background}>
            <div className={styles.items}>
                <h1 className={styles.quizHeader}>Trash <br/>Scavenger</h1>
                <Link href='/quiz'>
                    <Button buttonText={'Play'} bgColor="#56B847" borderColor="#0B7908"/>
                </Link>
                <Button buttonText={'Tutorial'} bgColor="#3C8DEE"/>
                <Image src={'/TrashBagFish'} width={129} height={72}/>
            </div>
        </div>
      </main>
  );
}