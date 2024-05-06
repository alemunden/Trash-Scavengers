import styles from '@/styles/QuizTutorial.module.css'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'

export default function QuizTutorial() {

    var welcomeHeader = process.env.NEXT_PUBLIC_WELCOMEHEADER;

    return(
        <>
        <div className={styles.containers}>
            <div className={styles.welcomeGameContainer}>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
                <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                <h1 className={styles.welcomeHeader}>{welcomeHeader}</h1>
            </div>
            <div className={styles.answerRightContainer}>
                <h2 className={styles.answerRightHeader}>Answer questions right:<br/>advance + gain currency!</h2>
                <div className={styles.answerRightIconsContainer}>
                    <Image src={'/fishbonegreyleft.svg'} width={53} height={53} alt='A vector drawing of a fish skeleton.'/>
                    <Image src={'/sqaurescorrect.svg'} width={109} height={96} alt='Four red squares displayed in rows of two. The top-right square is green instead of red.'/>
                    <Image src={'/fishboneblackright.svg'} width={53} height={53} alt='A vector drawing of a fish skeleton.'/>
                </div>
            </div>
            <div className={styles.answerWrongContainer}>
                <h2 className={styles.answerWrongHeader}>Answer questions wrong:<br/>Sammy's health goes down :/</h2>
                <div className={styles.answerWrongIconsContainer}>
                    <Image src={'/fishboneblackleft.svg'} width={53} height={53} alt='A vector drawing of a fish skeleton.'/>
                    <Image src={'/squaresincorrect.svg'} width={109} height={96} alt='Four red squares displayed in rows of two.'/>
                    <Image src={'/fishbonegreyright.svg'} width={53} height={53} alt='A vector drawing of a fish skeleton.'/>
                </div>
            </div>
        </div>
        <div className={styles.playButton}>
            <Link href={'/quiz'} tabIndex="1">
                <Button buttonText={'Play!'} bgColor="#F2CE73"/>
            </Link>
        </div>
            
        </>
    )
}