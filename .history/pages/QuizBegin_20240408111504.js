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
                <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                <h1 className={styles.quizHeader}>Trash <br/>Scavenger</h1>
                <Link href='/quiz'>
                  <Button buttonText={'Play'} bgColor="#56B847" borderColor="#0B7908" tabindex='1'/>
                </Link>
                <Link href='/QuizTutorial'>
                  <Button buttonText={'Tutorial'} bgColor="#3C8DEE" tabindex='2'/>
                </Link>
                <Image src={'/TrashBagFish.svg'} width={129} height={72} alt='A vector icon of a trash bag surrounded by a fish skeleton on both sides.'/>
                <Link href='/home'>
                  <Button buttonText={'Home'} bgColor="#F2CE73" tabindex='3'/>
                </Link>
            </div>
        </div>
      </main>
  );
}